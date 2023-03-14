import { Module } from '@nestjs/common';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { PrismaModule } from '../../config/database/prisma/prisma.module';
import { PrismaService } from '../../config/database/prisma/prisma.service';

@Module({
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
