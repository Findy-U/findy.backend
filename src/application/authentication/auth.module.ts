import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginValidationMiddleware } from '../../common/middlewares/login-validation.middleware';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy.ts';

@Module({
  controllers: [AuthController],
  providers: [AuthService, CandidateUserInMemoryRepository, LocalStrategy],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('api/login');
  }
}
