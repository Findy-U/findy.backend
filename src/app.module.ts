import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/authentication/auth.module';
import { CandidateUserModule } from './application/candidate-user/candidate-user.module';
import appConfig from './config/app/app.config';
import { PrismaModule } from './config/database/prisma/prisma.module';
import { MailModule } from './mails/mail.module';
import { CandidateProfileModule } from './application/candidate-profile/candidate-profile.module';
import { CandidateProjectModule } from './application/candidate-project/candidate-project.module';
import { CandidateUserDetailsModule } from './application/candidate-user-details/candidate-user-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    AuthModule,
    CandidateUserModule,
    MailModule,
    PrismaModule,
    CandidateUserModule,
    CandidateProfileModule,
    CandidateProjectModule,
    CandidateUserDetailsModule,
  ],
  providers: [],
})
export class AppModule {}
