import { CreateSurveyMarketInformationDto } from './dto/create-survey-market-information.dto';
import { UpdateSurveyMarketInformationDto } from './dto/update-survey-market-information.dto';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
export declare class SurveyMarketInformationService {
    private readonly surveyMarketRepository;
    constructor(surveyMarketRepository: SurveyMarketInformationRepository);
    create(dataSurvey: CreateSurveyMarketInformationDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateSurveyMarketInformationDto: UpdateSurveyMarketInformationDto): string;
    remove(id: number): string;
}
