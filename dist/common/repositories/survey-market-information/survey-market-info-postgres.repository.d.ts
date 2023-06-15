import { CreateSurveyMarketInformationDto } from '../../../application/survey-market-information/dto/create-survey-market-information.dto';
import { SurveyMarketInformationRepository } from '../../../application/survey-market-information/repositories/survey-market-information.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
export declare class SurveyMarketInformationPostgresRepository implements SurveyMarketInformationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dataSurvey: CreateSurveyMarketInformationDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    findByIdUser(idUser: number): Promise<any>;
    update(id: number, updateSurveyMarketInformationDto: any): Promise<any>;
    remove(id: number): Promise<any>;
}
