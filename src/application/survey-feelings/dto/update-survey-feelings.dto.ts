import { PartialType } from '@nestjs/swagger';
import { CreateSurveyFeelingsDto } from './create-survey-feelings.dto';

export class UpdateSurveyFeelingsDto extends PartialType(
  CreateSurveyFeelingsDto,
) {}
