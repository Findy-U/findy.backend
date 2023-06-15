import { Request } from 'express';
import { CreateSurveyMarketInformationDto } from './dto/create-survey-market-information.dto';
import { UpdateSurveyMarketInformationDto } from './dto/update-survey-market-information.dto';
import { SurveyMarketInformationService } from './survey-market-information.service';
export declare class SurveyMarketInformationController {
    private readonly surveyMarketInformationService;
    constructor(surveyMarketInformationService: SurveyMarketInformationService);
    create(body: CreateSurveyMarketInformationDto, req: Request): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateSurveyMarketInformationDto: UpdateSurveyMarketInformationDto): string;
    remove(id: string): string;
}
