import { Module } from '@nestjs/common';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { CandidateProfileRepositoryMySQL } from '../../common/repositories/candidate-profile/candidate-profile-mysql-repository';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';

@Module({
  controllers: [CandidateProfileController],
  providers: [
    CandidateProfileService,
    {
      provide: CandidateProfileRepository,
      useClass: CandidateProfileRepositoryMySQL,
    },
    CandidateProfile,
  ],
})
export class CandidateProfileModule {}
