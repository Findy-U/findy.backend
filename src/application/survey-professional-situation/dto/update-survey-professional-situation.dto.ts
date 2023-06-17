import { PartialType } from '@nestjs/swagger';
import { CreateSurveyProfessionalSituationDto } from './create-survey-professional-situation.dto';

export class UpdateSurveyProfessionalSituationDto extends PartialType(
  CreateSurveyProfessionalSituationDto,
) {}
