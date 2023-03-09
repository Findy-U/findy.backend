import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/authentication/auth.module';
import { CadidateUserModule } from './application/cadidate-user/cadidate-user.module';
import appConfig from './config/app/app.config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    AuthModule,
    CadidateUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
