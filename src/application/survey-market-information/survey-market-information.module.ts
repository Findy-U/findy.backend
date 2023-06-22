import { Module } from '@nestjs/common';
import { SurveyMarketInformationService } from './survey-market-information.service';
import { SurveyMarketInformationController } from './survey-market-information.controller';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
import { SurveyMarketInformationSqliteRepository } from '../../common/repositories/survey-market-information/survey-market-info-sqlite.repository';
import { SurveyMarketInformationPostgresRepository } from '../../common/repositories/survey-market-information/survey-market-info-mysql.repository';

@Module({
  controllers: [SurveyMarketInformationController],
  providers: [
    SurveyMarketInformationService,
    {
      provide: SurveyMarketInformationRepository,
      useClass: SurveyMarketInformationPostgresRepository,
    },
  ],
})
export class SurveyMarketInformationModule {}
