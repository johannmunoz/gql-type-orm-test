import { ApolloServer } from 'apollo-server';

import Alert from './alert';
import { resolveAlertReference } from './alert-reference';
import { buildFederatedSchema } from '../../helpers/buildFederatedSchema';
import AlertsResolver from './resolver';

export async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema(
    {
      resolvers: [AlertsResolver],
      orphanedTypes: [Alert],
    },
    {
      Alert: { __resolveReference: resolveAlertReference },
    }
  );

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen({ port });

  console.log(`Alerts service ready at ${url}`);

  return url;
}
