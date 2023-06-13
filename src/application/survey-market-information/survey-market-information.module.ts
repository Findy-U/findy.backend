import { Module } from '@nestjs/common';
import { SurveyMarketInformationService } from './survey-market-information.service';
import { SurveyMarketInformationController } from './survey-market-information.controller';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
import { SurveyMarketInformationSqliteRepository } from '../../common/repositories/survey-market-information/survey-market-info-sqlite.repository';

@Module({
  controllers: [SurveyMarketInformationController],
  providers: [
    SurveyMarketInformationService,
    {
      provide: SurveyMarketInformationRepository,
      useClass: SurveyMarketInformationSqliteRepository,
    },
  ],
})
export class SurveyMarketInformationModule {}
