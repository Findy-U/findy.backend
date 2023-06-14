import { Module } from '@nestjs/common';
import { SurveyFeelingsService } from './survey-feelings.service';
import { SurveyFeelingsController } from './survey-feelings.controller';

@Module({
  controllers: [SurveyFeelingsController],
  providers: [SurveyFeelingsService],
})
export class SurveyFeelingsModule {}
