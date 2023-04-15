import { randomBytes } from "crypto";

export function generateConfirmationToken() {
    const token = randomBytes(32).toString('hex');
    const expiredAt = new Date();
    expiredAt.setHours(expiredAt.getHours() + 2);
    return { token, expiredAt };
}