import { ApolloServer } from 'apollo-server';

import AccountsResolver from './resolver';
import { buildFederatedSchema } from '../../helpers/buildFederatedSchema';
import Account from './account';
import { resolveAccountReference } from './account-reference';

export async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema(
    {
      resolvers: [AccountsResolver],
      orphanedTypes: [Account],
    },
    {
      Account: { __resolveReference: resolveAccountReference },
    }
  );

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen({ port });
  console.log(`Account service ready at ${url}`);

  return url;
}
