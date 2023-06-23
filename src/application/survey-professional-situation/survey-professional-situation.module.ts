import { Module } from '@nestjs/common';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';
import { SurveyProfessionalSituationController } from './survey-professional-situation.controller';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';
import { SurveyProfessionalSituationSqliteRepository } from '../../common/repositories/survey-professional-situation/survey-professional-situation-sqlite.repository';
import { SurveyProfessionalSituationMySqlRepository } from '../../common/repositories/survey-professional-situation/survey-professional-situation-mysql.repository';
import { AppConfig } from '../../common/interfaces/app-config';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');
@Module({
  controllers: [SurveyProfessionalSituationController],
  providers: [
    SurveyProfessionalSituationService,
    {
      provide: SurveyProfessionalSituationRepository,
      useClass: SurveyProfessionalSituationSqliteRepository,
    },
  ],
})
export class SurveyProfessionalSituationModule {}
