import { SurveyFeelings } from 'src/application/survey-feelings/entities/survey-feelings.entity';
import { SurveyFeelingsRepository } from 'src/application/survey-feelings/repositories/survey-feelings.repository';
import { CreateSurveyFeelingsDto } from '../../../application/survey-feelings/dto/create-survey-feelings.dto';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
export declare class SurveyFeelingsPostgresRepository implements SurveyFeelingsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dataSurvey: CreateSurveyFeelingsDto): Promise<SurveyFeelings>;
    findAll(): Promise<any>;
    findById(id: number): Promise<import(".prisma/client").SurveyFeelings & {
        CandidateUser: import(".prisma/client").CandidateUser;
    }>;
    findOne(candidateUserId: number): Promise<SurveyFeelings>;
}
