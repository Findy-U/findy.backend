import { Controller, Post } from '@nestjs/common';

@Controller('api')
export class AuthController {
  @Post('login')
  login() {
    return 'logado!!';
  }
}
