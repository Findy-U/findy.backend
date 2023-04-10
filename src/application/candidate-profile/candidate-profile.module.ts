import { Module } from '@nestjs/common';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';
import { CandidateUserPostgresRepository } from 'src/common/repositories/candidate-profile/candidate-profile-postgres.repository';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';

@Module({
  controllers: [CandidateProfileController],
  providers: [
    CandidateProfileService,
    {
      provide: CandidateProfileRepository,
      useClass: CandidateProfilePostgresRepository,
    },
    CandidateProfile,
  ],
})
export class CandidateProfileModule {}
