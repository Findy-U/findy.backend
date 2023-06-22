import { Module } from '@nestjs/common';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsController } from './candidate-user-details.controller';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { CandidateUserDetailsMySqlRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-nysql.repository';
import { CandidateUserDetailsSqliteRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-sqlite.repository';
import { CandidateUserDetailsSerialize } from 'src/common/serializers/candidate-user-details.serialize';

@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    CandidateUserDetailsSerialize,
    PrismaService,
    {
      provide: CandidateUserDetailsRepository,
      useClass: CandidateUserDetailsMySqlRepository,
    },
  ],
})
export class CandidateUserDetailsModule {}
