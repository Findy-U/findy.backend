import { Module } from '@nestjs/common';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';
import { SurveyProfessionalSituationController } from './survey-professional-situation.controller';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';
import { SurveyProfessionalSituationSqliteRepository } from '../../common/repositories/survey-professional-situation/survey-professional-situation-sqlite.repository';
import { SurveyProfessionalSituationPostgresRepository } from '../../common/repositories/survey-professional-situation/survey-professional-situation-postgres.repository';

@Module({
  controllers: [SurveyProfessionalSituationController],
  providers: [
    SurveyProfessionalSituationService,
    {
      provide: SurveyProfessionalSituationRepository,
      useClass: SurveyProfessionalSituationPostgresRepository,
    },
  ],
})
export class SurveyProfessionalSituationModule {}
