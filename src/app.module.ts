import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/authentication/auth.module';
import { CadidateUserModule } from './application/cadidate-user/cadidate-user.module';
import appConfig from './config/app/app.config';
import { EmailConfirmationModule } from './mails/email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from './mails/email-confirmation/email-confirmation.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    AuthModule,
    CandidateUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
