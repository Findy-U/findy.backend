import { Module } from '@nestjs/common';
import { CandidateUserPostgresRepository } from 'src/common/repositories/candidate-user/candidate-user-postgres.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

@Module({
  imports: [],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    PrismaService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserPostgresRepository,
    },
  ],
})
export class CandidateUserModule {}