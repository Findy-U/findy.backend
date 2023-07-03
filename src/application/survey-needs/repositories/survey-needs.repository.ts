import { CreateSurveyNeedsDto } from '../dto/create-survey-needs.dto';
import { SurveyNeeds } from '../entities/survey-needs.entity';

export abstract class SurveyNeedsRepository {
  abstract create(details: CreateSurveyNeedsDto): Promise<SurveyNeeds>;
  abstract findAll(): Promise<SurveyNeeds[]>;
  abstract findById(id: number);
  abstract findOne(candidateUserId: number): Promise<SurveyNeeds>;
}
