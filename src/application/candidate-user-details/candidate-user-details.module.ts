import { Module } from '@nestjs/common';
import { CandidateUserDetailsPostgresRepository } from 'src/common/repositories/candidate-user-details/candidate-user-details-postgres.repository';
import { CandidateUserDetailsSerialize } from '../../common/serializers/candidate-user-details.serialize';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsController } from './candidate-user-details.controller';

@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    CandidateUserDetailsSerialize,
    PrismaService,
  ],
})
export class CandidateUserDetailsModule {}
