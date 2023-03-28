import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUserRepository } from '../application/candidate-user/repositories/candidate-user.repository';
import { EmailConfirmationInMemory } from '../common/repositories/candidate-user/email-confirmation-in-memory.repository';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: config.get<string>('mailHost'),
          secure: false,
          auth: {
            user: config.get<string>('mailUser'),
            pass: config.get<string>('mailPassword'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('mailFrom')}>`,
        },
        template: {
          dir: process.cwd() + '/src/mails/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService, EmailConfirmationInMemory],
  exports: [MailService],
})
export class MailModule { }
