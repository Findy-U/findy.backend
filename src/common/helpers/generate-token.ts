import { randomBytes } from 'crypto';

const EXPIRATION_TIME = 48 * 60 * 60 * 1000;

export const generateTemporaryToken = {
  token: randomBytes(32).toString('hex'),
  expiredAtConfirmationToken: () => {
    const expiredAt = new Date();
    expiredAt.setHours(expiredAt.getHours() + 2);
    return expiredAt;
  },
  expiredAtRecoverToken: new Date(Date.now() + EXPIRATION_TIME),
};
