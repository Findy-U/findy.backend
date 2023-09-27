import { Module } from '@nestjs/common';
import { SurveyFeelingsRepositoryMySQL } from 'src/common/repositories/survey-feelings/survey-feelings-mysql.repository';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyFeelingsRepository } from './repositories/survey-feelings.repository';
import { SurveyFeelingsController } from './survey-feelings.controller';
import { SurveyFeelingsService } from './survey-feelings.service';

@Module({
  controllers: [SurveyFeelingsController],
  providers: [
    SurveyFeelingsService,
    SurveyFeelingsSerialize,
    PrismaService,
    {
      provide: SurveyFeelingsRepository,
      useClass: SurveyFeelingsRepositoryMySQL,
    },
  ],
})
export class SurveyFeelingsModule {}
