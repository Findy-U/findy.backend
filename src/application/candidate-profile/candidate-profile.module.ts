import { Module } from '@nestjs/common';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfileController } from './candidate-profile.controller';

@Module({
  controllers: [CandidateProfileController],
  providers: [CandidateProfileService]
})
export class CandidateProfileModule {}
