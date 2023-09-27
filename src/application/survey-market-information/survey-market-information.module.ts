import { Module } from '@nestjs/common';
import { SurveyMarketInformationRepositoryMySQL } from '../../common/repositories/survey-market-information/survey-market-info-mysql.repository';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
import { SurveyMarketInformationController } from './survey-market-information.controller';
import { SurveyMarketInformationService } from './survey-market-information.service';

@Module({
  controllers: [SurveyMarketInformationController],
  providers: [
    SurveyMarketInformationService,
    {
      provide: SurveyMarketInformationRepository,
      useClass: SurveyMarketInformationRepositoryMySQL,
    },
  ],
})
export class SurveyMarketInformationModule {}
