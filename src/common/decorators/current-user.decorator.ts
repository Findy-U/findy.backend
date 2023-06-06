import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { CandidateUserInterface } from '../interfaces/candidate-user/candidate-user.interface';
import { AuthRequest } from '../interfaces/authentication/auth-request';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): CandidateUserInterface => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
