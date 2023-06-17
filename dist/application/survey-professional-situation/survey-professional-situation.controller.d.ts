import { CreateSurveyProfessionalSituationDto } from './dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';
import { Request } from 'express';
export declare class SurveyProfessionalSituationController {
    private readonly surveyProfessionalSituationService;
    constructor(surveyProfessionalSituationService: SurveyProfessionalSituationService);
    create(createSurveyProfessionalSituationDto: CreateSurveyProfessionalSituationDto, req: Request): Promise<any>;
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
}
