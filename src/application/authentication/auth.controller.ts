import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { AuthRequest } from '../../models/auth-request';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private readonly auhtSerive: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    return this.auhtSerive.login(req.user);
  }
}
