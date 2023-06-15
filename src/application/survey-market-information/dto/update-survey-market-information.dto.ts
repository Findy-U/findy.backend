import { PartialType } from '@nestjs/swagger';
import { CreateSurveyMarketInformationDto } from './create-survey-market-information.dto';

export class UpdateSurveyMarketInformationDto extends PartialType(
  CreateSurveyMarketInformationDto,
) {}
