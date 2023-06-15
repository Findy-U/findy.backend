import { randomBytes } from 'crypto';

export class ExpireTokenValidationService {
  generateToken(): string {
    const token = randomBytes(32).toString('hex');
    return token;
  }
}
