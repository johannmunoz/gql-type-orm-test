import Account from './account';
import { Query, Resolver } from 'type-graphql';

@Resolver((of) => Account)
export default class AccountsResolver {
  @Query((returns) => [Account])
  users(): Promise<Account[]> {
    return Account.find();
  }
}
