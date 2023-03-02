import { Module } from '@nestjs/common';
import { PrismaModule } from './config/database/prisma/prisma.module';
import { AuthModule } from './application/authentication/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
