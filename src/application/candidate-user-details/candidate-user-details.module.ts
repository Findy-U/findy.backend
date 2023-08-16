import { Module } from '@nestjs/common';
import { CandidateUserDetailsSerialize } from 'src/common/serializers/candidate-user-details.serialize';
import { CandidateUserDetailsMySqlRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-mysql.repository';
import { CandidateUserDetailsSqliteRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-sqlite.repository';
import { CandidateUserDetailsController } from './candidate-user-details.controller';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    CandidateUserDetailsSerialize,
    {
      provide: CandidateUserDetailsRepository,
      useClass:
        modeProduction === 'true'
          ? CandidateUserDetailsMySqlRepository
          : CandidateUserDetailsSqliteRepository,
    },
  ],
})
export class CandidateUserDetailsModule {}
