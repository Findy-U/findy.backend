import { Module } from '@nestjs/common';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { CandidateProfilePostgresRepository } from 'src/common/repositories/candidate-profile/candidate-profile-postgres-repository';
import { CandidateProfileSQLiteRepository } from '../../common/repositories/candidate-profile/candidate-profile-sqlite-repository';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';

@Module({
  controllers: [CandidateProfileController],
  providers: [
    CandidateProfileService,
    {
      provide: CandidateProfileRepository,
      useClass: CandidateProfileSQLiteRepository,
    },
    CandidateProfile,
  ],
})
export class CandidateProfileModule {}
