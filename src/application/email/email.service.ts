import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendActivationEmail(to: string, name: string, activationLink: string) {
    return await this.mailerService.sendMail({
      to: to,
      subject: 'Email de ativação',
      template: './activation-email',
      context: {
        name,
        activationLink,
      },
    });
  }
}
