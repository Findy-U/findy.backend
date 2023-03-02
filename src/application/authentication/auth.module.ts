import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginValidationMiddleware } from '../../common/middlewares/login-validation.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('api/login');
  }
}
