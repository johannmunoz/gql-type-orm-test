import Account from './account';

export async function resolveAccountReference(
  reference: Pick<Account, 'id'>
): Promise<Account | undefined> {
  return Account.findOne(reference.id);
}
