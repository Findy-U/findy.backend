import { Request } from 'express';
import { CandidateUserInterface } from '../common/interfaces/candidate-user.interface';
export interface AuthRequest extends Request {
    user: CandidateUserInterface;
}
