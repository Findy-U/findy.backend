import { Module } from '@nestjs/common';
import { SurveyFeelingsService } from './survey-feelings.service';
import { SurveyFeelingsController } from './survey-feelings.controller';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyFeelingsPostgresRepository } from 'src/common/repositories/survey-feelings/survey-feelings-postgres.repository';
import { SurveyFeelingsSqliteRepository } from 'src/common/repositories/survey-feelings/survey-feelings-sqlite.repository';
import { SurveyFeelingsRepository } from './repositories/survey-feelings.repository';

@Module({
  controllers: [SurveyFeelingsController],
  providers: [
    SurveyFeelingsService,
    PrismaService,
    {
      provide: SurveyFeelingsRepository,
      useClass: SurveyFeelingsSqliteRepository,
    },
  ],
})
export class SurveyFeelingsModule {}
