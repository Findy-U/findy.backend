import { Request } from 'express';
import { SurveyFeelingsService } from './survey-feelings.service';
import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
export declare class SurveyFeelingsController {
    private readonly surveyFeelingsService;
    constructor(surveyFeelingsService: SurveyFeelingsService);
    create(createSurveyFeelingsDto: CreateSurveyFeelingsDto, req: Request): Promise<{
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
    findById(id: string): Promise<{
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
