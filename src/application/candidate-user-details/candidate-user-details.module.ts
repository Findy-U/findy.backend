import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUserDetailsSerialize } from 'src/common/serializers/candidate-user-details.serialize';
import { AppConfig } from '../../common/interfaces/app-config';
import { CandidateUserDetailsMySqlRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-nysql.repository';
import { CandidateUserDetailsSqliteRepository } from '../../common/repositories/candidate-user-details/candidate-user-details-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserDetailsController } from './candidate-user-details.controller';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');
@Module({
  controllers: [CandidateUserDetailsController],
  providers: [
    CandidateUserDetailsService,
    CandidateUserDetailsSerialize,
    PrismaService,
    {
      provide: CandidateUserDetailsRepository,
      useClass: CandidateUserDetailsSqliteRepository,
    },
  ],
})
export class CandidateUserDetailsModule {}
