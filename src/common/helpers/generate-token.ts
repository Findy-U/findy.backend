import { randomBytes } from 'crypto';

export async function generateTemporaryToken() {
  const token = randomBytes(32).toString('hex');
  const expiredAt = new Date();
  expiredAt.setHours(expiredAt.getHours() + 2);
  return { token, expiredAt };
}
