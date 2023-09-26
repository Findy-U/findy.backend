import { randomBytes } from 'crypto';
export class generateTemporaryToken {
  private token: string;
  private expirationDate: Date;

  constructor(expirationHours: number) {
    this.token = this.generateRandomToken();
    this.setExpiration(expirationHours);
  }

  private generateRandomToken(): string {
    const tokenBytes = randomBytes(32);
    return tokenBytes.toString('hex');
  }

  private setExpiration(expirationHours: number): void {
    const now = new Date();
    this.expirationDate = new Date(
      now.getTime() + expirationHours * 60 * 60 * 1000,
    );
  }

  getToken(): string {
    return this.token;
  }

  getExpirationDate(): Date {
    return this.expirationDate;
  }
}
