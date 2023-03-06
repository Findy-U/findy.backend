import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest } from '../../models/auth-request';
import { CandidateUserInterface } from '../interfaces/candidate-user.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): CandidateUserInterface => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
