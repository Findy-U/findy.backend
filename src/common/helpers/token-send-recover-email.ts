import { randomBytes } from 'crypto';

export class ExpireTokenValidationService {
  generateToken(): string {
    const token = randomBytes(32).toString('hex');
    return token;
  }

  expiredAtConfirmationToken(): Date {
    //create 24 hour token expiry time validation
    const expiredAt = new Date();
    expiredAt.setHours(expiredAt.getHours() + 24);
    return expiredAt;
  }
}
