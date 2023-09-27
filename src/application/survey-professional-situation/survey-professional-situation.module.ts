import { Module } from '@nestjs/common';
import { SurveyProfessionalSituationRepositoryMySQL } from '../../common/repositories/survey-professional-situation/survey-professional-situation-mysql.repository';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';
import { SurveyProfessionalSituationController } from './survey-professional-situation.controller';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';

@Module({
  controllers: [SurveyProfessionalSituationController],
  providers: [
    SurveyProfessionalSituationService,
    {
      provide: SurveyProfessionalSituationRepository,
      useClass: SurveyProfessionalSituationRepositoryMySQL,
    },
  ],
})
export class SurveyProfessionalSituationModule {}
