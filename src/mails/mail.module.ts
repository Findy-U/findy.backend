import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUserRepository } from '../application/candidate-user/repositories/candidate-user.repository';
import { EmailConfirmationInMemory } from '../common/repositories/email-confirmation/email-confirmation-in-memory.repository';
import { join } from 'path';
import { MailService } from './mail.service';
import { CandidateUserSqliteRepository } from 'src/common/repositories/candidate-user/candidate-user-sqlite.repository';
import { CandidateUserModule } from 'src/application/candidate-user/candidate-user.module';

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
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
