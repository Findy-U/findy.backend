import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@internal/prisma-mysql/client';

@Injectable()
export class PrismaMySqlService
  extends PrismaClient<Prisma.PrismaClientOptions, 'error' | 'query'>
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    this.$on('error', (e) => {
      // Do something
      console.error(e);
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
