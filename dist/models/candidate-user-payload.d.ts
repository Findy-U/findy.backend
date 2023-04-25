export interface UserPayload {
    sub: number;
    email: string;
    name: string;
    roles: string;
    iat?: number;
    exp?: number;
}
