import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaMySqlService } from './prisma-mysql.service';

@Global()
@Module({
  providers: [PrismaService, PrismaMySqlService],
  exports: [PrismaService, PrismaMySqlService],
})
export class PrismaModule {}
