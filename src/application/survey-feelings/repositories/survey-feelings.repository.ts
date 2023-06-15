import { CreateSurveyFeelingsDto } from '../dto/create-survey-feelings.dto';
import { SurveyFeelings } from '../entities/survey-feelings.entity';

export abstract class SurveyFeelingsRepository {
  abstract create(details: CreateSurveyFeelingsDto): Promise<SurveyFeelings>;
  abstract findAll(): Promise<SurveyFeelings[]>;
  abstract findById(id: number);
  abstract findOne(candidateUserId: number): Promise<SurveyFeelings>;
}
