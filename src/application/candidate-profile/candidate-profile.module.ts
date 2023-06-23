import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { CandidateProfileMySqlRepository } from 'src/common/repositories/candidate-profile/candidate-profile-mysql-repository';
import { AppConfig } from '../../common/interfaces/app-config';
import { CandidateProfileSQLiteRepository } from '../../common/repositories/candidate-profile/candidate-profile-sqlite-repository';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');

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
