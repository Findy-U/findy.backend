import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { SESSION_COOKIE_KEY } from '../../common/constants/constants';
import { GoogleOAuthGuard } from '../../common/guards/google-oauth.guard';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { AuthRequest } from '../../models/auth-request';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Req() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @Get('auth/google')
  @UseGuards(GoogleOAuthGuard)
  async signInWithGoogle() {
    console.log('success');
  }

  @Get('auth/google/redirect')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const token = await this.authService.login(req.user);

    res.cookie(SESSION_COOKIE_KEY, token.access_token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.send('Authentications success!');
  }
}
