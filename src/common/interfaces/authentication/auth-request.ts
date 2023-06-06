import { Request } from 'express';
import { CandidateUserInterface } from '../candidate-user/candidate-user.interface';

export interface AuthRequest extends Request {
  user: CandidateUserInterface;
}
