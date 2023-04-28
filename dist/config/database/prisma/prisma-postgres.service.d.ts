import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@internal/prisma-postgres/client';
export declare class PrismaPostgresService extends PrismaClient<Prisma.PrismaClientOptions, 'error' | 'query'> implements OnModuleInit, OnModuleDestroy {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
