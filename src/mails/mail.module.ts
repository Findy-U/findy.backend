import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
