import Alert from './alert';

export async function resolveAlertReference(
  reference: Pick<Alert, 'id'>
): Promise<Alert | undefined> {
  return Alert.findOne(reference.id);
}
