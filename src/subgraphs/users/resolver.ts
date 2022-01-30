import User from './user';
import { Query, Resolver } from 'type-graphql';

@Resolver((of) => User)
export default class UsersResolver {
  @Query((returns) => [User])
  users(): Promise<User[]> {
    return User.find();
  }
}
