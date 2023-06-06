import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUser } from '../application/candidate-user/entities/candidate-user.entity';

@Injectable()
export class MailService {
  constructor(
    private readonly configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  async sendActivationEmail(candidate: CandidateUser, token: string) {
    const url = `${this.configService.get<string>('urlEmailConfirmation')}?id=${
      candidate.id
    }
    &token=${token}`;

    await this.mailerService.sendMail({
      to: candidate.email,
      from: '"Support Findy Team" noreply@application.com',
      subject: 'Email de ativação',
      template: './activationEmail',
      context: {
        name: candidate.name,
        url,
      },
    });
  }

  async sendPasswordRecover(candidate: CandidateUser, token: string) {
    const url = `${this.configService.get<string>('urlRecoverPassword')}?id=${
      candidate.id
    }&token=${token}`;

    await this.mailerService.sendMail({
      to: candidate.email,
      from: '"Support Findy Team" noreply@application.com',
      subject: 'Recuperação de senha',
      template: './recoverPassword',
      context: {
        name: candidate.name,
        email: candidate.email,
        url,
      },
    });
  }
}
