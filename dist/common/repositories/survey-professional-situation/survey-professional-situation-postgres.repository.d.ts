import { CreateSurveyProfessionalSituationDto } from '../../../application/survey-professional-situation/dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationRepository } from '../../../application/survey-professional-situation/repositories/survey-professional-situation.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
export declare class SurveyProfessionalSituationPostgresRepository implements SurveyProfessionalSituationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dataSurvey: CreateSurveyProfessionalSituationDto): Promise<any>;
    findAll(): Promise<any>;
    findByIdUser(id: number): Promise<any>;
    findById(id: number): Promise<any>;
}
