import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/authentication/auth.module';
import { CandidateUserController } from './application/candidate-user/candidate-user.controller';
import { CandidateUserModule } from './application/candidate-user/candidate-user.module';
import { CandidateUserService } from './application/candidate-user/candidate-user.service';
import { EmailConfirmationInMemory } from './common/repositories/candidate-user/email-confirmation-in-memory.repository';
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
