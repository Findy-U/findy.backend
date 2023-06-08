import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaPostgresService } from './prisma-postgres.service';

@Global()
@Module({
  providers: [PrismaService, PrismaPostgresService],
  exports: [PrismaService, PrismaPostgresService],
})
export class PrismaModule {}
