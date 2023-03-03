import { Request } from 'express';

export interface CandidateUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthRequest extends Request {
  user: CandidateUser;
}
