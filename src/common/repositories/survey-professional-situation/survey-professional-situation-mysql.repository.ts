import { Injectable } from '@nestjs/common';
import { CreateSurveyProfessionalSituationDto } from '../../../application/survey-professional-situation/dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationRepository } from '../../../application/survey-professional-situation/repositories/survey-professional-situation.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class SurveyProfessionalSituationRepositoryMySQL
  implements SurveyProfessionalSituationRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(dataSurvey: CreateSurveyProfessionalSituationDto): Promise<any> {
    return this.prisma.surveyProfessionalSituation.create({ data: dataSurvey });
  }

  async findAll(): Promise<any> {
    return await this.prisma.surveyProfessionalSituation.findMany();
  }

  async findByIdUser(id: number): Promise<any> {
    return await this.prisma.surveyProfessionalSituation.findUnique({
      where: { candidateUserId: id },
    });
  }

  async findById(id: number): Promise<any> {
    return await this.prisma.surveyProfessionalSituation.findUnique({
      where: { id },
    });
  }
}
