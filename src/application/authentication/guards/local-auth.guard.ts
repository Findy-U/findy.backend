import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ForbiddenError } from '../../../common/exceptions/forbidden.error';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any) {
    if (err instanceof ForbiddenError) {
      throw new ForbiddenException(err?.message);
    }

    if (err || !user) {
      throw new UnauthorizedException(err?.message);
    }

    return user;
  }
}
