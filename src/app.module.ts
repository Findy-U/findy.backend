import { Module } from '@nestjs/common';
import { AuthModule } from './application/authentication/auth.module';
@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
