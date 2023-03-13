import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('name') name: string,
    @Body('activationLink') activationLink: string,
  ): Promise<{ message: string }> {
    await this.emailService.sendActivationEmail(to, name, activationLink);
    return { message: 'Email enviado com sucesso' };
  }
}
