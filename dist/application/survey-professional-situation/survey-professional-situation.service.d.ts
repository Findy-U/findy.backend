import { CreateSurveyProfessionalSituationDto } from './dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';
export declare class SurveyProfessionalSituationService {
    private readonly surveyProfessionalRepository;
    constructor(surveyProfessionalRepository: SurveyProfessionalSituationRepository);
    create(dataSurvey: CreateSurveyProfessionalSituationDto): Promise<any>;
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
}
