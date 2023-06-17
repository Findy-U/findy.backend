import { CreateSurveyFeelingsDto } from '../dto/create-survey-feelings.dto';
import { SurveyFeelings } from '../entities/survey-feelings.entity';
export declare abstract class SurveyFeelingsRepository {
    abstract create(details: CreateSurveyFeelingsDto): Promise<SurveyFeelings>;
    abstract findAll(): Promise<SurveyFeelings[]>;
    abstract findById(id: number): any;
    abstract findOne(candidateUserId: number): Promise<SurveyFeelings>;
}
