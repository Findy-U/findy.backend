import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
import { SurveyFeelingsRepository } from 'src/application/survey-feelings/repositories/survey-feelings.repository';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';
export declare class SurveyFeelingsService {
    private readonly surveyFeelingsSerialize;
    private readonly surveyFeelingsRepository;
    constructor(surveyFeelingsSerialize: SurveyFeelingsSerialize, surveyFeelingsRepository: SurveyFeelingsRepository);
    create(survey: CreateSurveyFeelingsDto): Promise<{
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
    }>;
    findAll(): Promise<{
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
        createdAt: any;
    }[]>;
    findById(id: number): Promise<{
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
        createdAt: string;
        user: {
            name: any;
            email: any;
            roles: any;
        };
    }>;
}
