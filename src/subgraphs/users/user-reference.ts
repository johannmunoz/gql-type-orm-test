import User from './user';

export async function resolveUserReference(
  reference: Pick<User, 'id'>
): Promise<User> {
  return User.findOne(reference.id);
}
