import { Module } from '@nestjs/common';
import { CandidateUserDetailsPostgresRepository } from 'src/common/repositories/candidate-user-details/candidate-user-details-postgres.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsController } from './candidate-user-details.controller';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { CandidateUserDetailsSqliteRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-sqlite.repository';

@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    PrismaService,
    {
      provide: CandidateUserDetailsRepository,
      useClass: CandidateUserDetailsSqliteRepository,
    },
  ],
})
export class CandidateUserDetailsModule {}
