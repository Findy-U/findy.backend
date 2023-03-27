import { Module } from '@nestjs/common';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    PrismaService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserSqliteRepository,
    },
  ],
})
export class CandidateUserModule {}
