import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from './application/authentication/auth.module';
import { CandidateUserModule } from './application/candidate-user/candidate-user.module';
import appConfig from './config/app/app.config';
import { EmailModule } from './mails/email/email.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    // AuthModule,
    // CandidateUserModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
