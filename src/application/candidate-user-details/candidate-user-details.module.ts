import { Module } from '@nestjs/common';
import { CandidateUserDetailsSerialize } from 'src/common/serializers/candidate-user-details.serialize';
import { CandidateUserDetailRepositoryMySQL } from '../../common/repositories/candidate-user-details/candidate-user-details-mysql.repository';
import { CandidateUserDetailsController } from './candidate-user-details.controller';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';

@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    CandidateUserDetailsSerialize,
    {
      provide: CandidateUserDetailsRepository,
      useClass: CandidateUserDetailRepositoryMySQL,
    },
  ],
})
export class CandidateUserDetailsModule {}
