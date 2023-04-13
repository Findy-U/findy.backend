import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { SESSION_COOKIE_KEY } from '../../common/constants/constants';
import { GoogleOAuthGuard } from '../../common/guards/google-oauth.guard';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { AuthRequest } from '../../models/auth-request';
import { RecoverPasswordDto } from '../candidate-user/dto/recover-password.dto';
import { AuthService } from './auth.service';
import {
  LoginUnauthorizedExceptionError,
  RecoverNotFoundExeptionError,
  ReponseRecoverPasswordEmail,
  ReponseRestPasswordEmail,
  RequestBodyLogin,
  ResetFoundExeptionError,
  SendRecoverPasswordEmailBodyProperty,
  SuccessResponse,
} from './swagger/auth-success.response';

@Controller()
@ApiTags('authentication')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SuccessResponse })
  @ApiBody({ type: RequestBodyLogin })
  @ApiUnauthorizedResponse({
    description: 'Email address or password provided is incorrect.',
    type: LoginUnauthorizedExceptionError,
  })
  async login(@Req() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @ApiExcludeEndpoint()
  @Get('auth/google')
  @UseGuards(GoogleOAuthGuard)
  @ApiOkResponse({
    description:
      'Endpoint responsável por realizar login com a conta do Google. O retorno é um token via cookies.',
    type: SuccessResponse,
  })
  async signInWithGoogle() {
    return;
  }

  @ApiExcludeEndpoint()
  @Get('auth/google/redirect')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const token = await this.authService.login(req.user);

    res.cookie(SESSION_COOKIE_KEY, token.access_token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.redirect(
      this.configService.get<string>('urlRedirectAuthGoogle'),
    );
  }

  @ApiBody({
    description:
      'Endpoint responsável por enviar e-mail de reset de senha e salvar no BD um token.',
    type: SendRecoverPasswordEmailBodyProperty,
  })
  @ApiResponse({
    status: 200,
    type: ReponseRecoverPasswordEmail,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o e-mail correspondente no BD',
    type: RecoverNotFoundExeptionError,
  })
  @Post('send-recover-password')
  @HttpCode(HttpStatus.OK)
  async sendRecoverPasswordEmail(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    try {
      await this.authService.sendRecoverPasswordEmail(email);
      return {
        message:
          'An email has been sent with instructions for resetting your password.',
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch('reset-password/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do usuário candidato',
    schema: { oneOf: [{ type: 'integer' }] },
    example: 'reset-password/1',
  })
  @ApiBody({
    type: RecoverPasswordDto,
  })
  @ApiOkResponse({
    type: ReponseRestPasswordEmail,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o id do usuário o token no BD',
    type: ResetFoundExeptionError,
  })
  async resetPassword(
    @Param('id') id: number,
    @Body() recoverPaswor: RecoverPasswordDto,
  ) {
    try {
      await this.authService.resetPassword(+id, recoverPaswor);
      return {
        message: 'Successfully reset password',
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
