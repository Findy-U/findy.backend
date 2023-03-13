import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppConfig } from '../../common/interfaces/app-config';
import { LoginValidationMiddleware } from '../../common/middlewares/login-validation.middleware';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserModule } from '../candidate-user/candidate-user.module';
import { CandidateUserService } from '../candidate-user/candidate-user.service';
import { CandidateUserRepository } from '../candidate-user/repositories/candidate-user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy.ts';
import { TesteController } from './teste.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService<AppConfig>) => ({
        secret: configService.get<string>('auth.jwt.secret'),
        signOptions: {
          expiresIn: configService.get<number>('auth.jwt.expiresInSeconds'),
        },
      }),
      inject: [ConfigService],
    }),
    CandidateUserModule,
  ],
  controllers: [AuthController, TesteController],
  providers: [
    AuthService,
    CandidateUserService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserInMemoryRepository,
    },
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('api/login');
  }
}
