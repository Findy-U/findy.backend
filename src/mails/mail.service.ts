import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUser } from '../application/candidate-user/entities/candidate-user.entity';
import { EmailConfirmationInMemory } from '../common/repositories/email-confirmation/email-confirmation-in-memory.repository';


@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
    //private emailConfirmationRepository: EmailConfirmationInMemory,
  ) { }

  async sendActivationEmail(candidate: CandidateUser, token: string) {
    const url = `${this.configService.get<string>('urlEmailConfirmation')}?token=${token}`;
    console.log(candidate.email);
    await this.mailerService.sendMail({
      to: candidate.email,
      subject: 'Email de ativação',
      template: './activationEmail',
      context: {
        name: candidate.name,
        url,
      },
    });
  }

  async sendPasswordRecover(candidate: CandidateUser, token: string) {
    const url = `${this.configService.get<string>('urlRecoverPassword')}?id=${candidate.id
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
