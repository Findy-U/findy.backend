import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CandidateUser } from '../application/candidate-user/entities/cadidate-user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: CandidateUser, token: string) {
    const url = `http://localhost:3000/reset-password?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Findy Team" noreply@application.com',
      subject: 'Recuperação de senha',
      template: './recoverPassword',
      context: {
        name: user.name,
        url,
      },
    });
  }
}
