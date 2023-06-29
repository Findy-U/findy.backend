import { Module } from '@nestjs/common';
import { SurveyMarketInformationPostgresRepository } from '../../common/repositories/survey-market-information/survey-market-info-mysql.repository';
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
      useClass: modeProduction
        ? SurveyMarketInformationSqliteRepository
        : SurveyMarketInformationPostgresRepository,
    },
  ],
})
export class SurveyMarketInformationModule {}
