export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  roles: string;
  completeSurvey?: boolean;
  iat?: number;
  exp?: number;
}
