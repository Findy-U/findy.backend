import { Module } from '@nestjs/common';
import { SurveyFeelingsSqliteRepository } from 'src/common/repositories/survey-feelings/survey-feelings-sqlite.repository';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyFeelingsMySqlRepository } from '../../common/repositories/survey-feelings/survey-feelings-mysql.repository';
import { SurveyFeelingsRepository } from './repositories/survey-feelings.repository';
import { SurveyFeelingsController } from './survey-feelings.controller';
import { SurveyFeelingsService } from './survey-feelings.service';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [SurveyFeelingsController],
  providers: [
    SurveyFeelingsService,
    SurveyFeelingsSerialize,
    PrismaService,
    {
      provide: SurveyFeelingsRepository,
      useClass:
        modeProduction === 'true'
          ? SurveyFeelingsMySqlRepository
          : SurveyFeelingsSqliteRepository,
    },
  ],
})
export class SurveyFeelingsModule {}
