export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  role: string;
  iat?: number;
  exp?: number;
}
