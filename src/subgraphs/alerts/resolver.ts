import Alert from './alert';
import { Query, Resolver } from 'type-graphql';

@Resolver((of) => Alert)
export default class AlertsResolver {
  @Query((returns) => [Alert])
  users(): Promise<Alert[]> {
    return Alert.find();
  }
}
