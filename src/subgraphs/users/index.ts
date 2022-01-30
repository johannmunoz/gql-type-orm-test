import { ApolloServer } from 'apollo-server';

import User from './user';
import { resolveUserReference } from './user-reference';
import UsersResolver from './resolver';
import { buildFederatedSchema } from '../../helpers/buildFederatedSchema';

export async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema(
    {
      resolvers: [UsersResolver],
      orphanedTypes: [User],
    },
    {
      User: { __resolveReference: resolveUserReference },
    }
  );

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen({ port });
  console.log(`Users service ready at ${url}`);

  return url;
}
