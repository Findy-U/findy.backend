import { Module } from '@nestjs/common';
import { SurveyMarketInformationMySqlRepository } from '../../common/repositories/survey-market-information/survey-market-info-mysql.repository';
import { SurveyMarketInformationSqliteRepository } from '../../common/repositories/survey-market-information/survey-market-info-sqlite.repository';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
import { SurveyMarketInformationController } from './survey-market-information.controller';
import { SurveyMarketInformationService } from './survey-market-information.service';

const modeProduction = process.env.MODE_PRODUCTION;

@Module({
  controllers: [SurveyMarketInformationController],
  providers: [
    SurveyMarketInformationService,
    {
      provide: SurveyMarketInformationRepository,
      useClass:
        modeProduction === 'true'
          ? SurveyMarketInformationMySqlRepository
          : SurveyMarketInformationSqliteRepository,
    },
  ],
})
export class SurveyMarketInformationModule {}
