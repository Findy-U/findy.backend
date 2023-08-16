import { Module } from '@nestjs/common';
import { SurveyNeedsSerialize } from 'src/common/serializers/survey-needs.serialize';
import { SurveyNeedsMySqlRepository } from '../../common/repositories/survey-needs/survey-needs-mysql.repository';
import { SurveyNeedsSqliteRepository } from '../../common/repositories/survey-needs/survey-needs-sqlite.repository';
import { SurveyNeedsRepository } from './repositories/survey-needs.repository';
import { SurveyNeedsController } from './survey-needs.controller';
import { SurveyNeedsService } from './survey-needs.service';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [SurveyNeedsController],
  providers: [
    SurveyNeedsService,
    SurveyNeedsSerialize,
    {
      provide: SurveyNeedsRepository,
      useClass:
        modeProduction === 'true'
          ? SurveyNeedsMySqlRepository
          : SurveyNeedsSqliteRepository,
    },
  ],
})
export class SurveyNeedsModule {}
