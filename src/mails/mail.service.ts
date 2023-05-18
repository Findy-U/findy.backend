import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUser } from '../application/candidate-user/entities/candidate-user.entity';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

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
        url,
      },
    });
  }
}
