import { Injectable } from '@nestjs/common';
import { SurveyFeelings } from 'src/application/survey-feelings/entities/survey-feelings.entity';
import { SurveyFeelingsRepository } from 'src/application/survey-feelings/repositories/survey-feelings.repository';
import { CreateSurveyFeelingsDto } from '../../../application/survey-feelings/dto/create-survey-feelings.dto';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class SurveyFeelingsPostgresRepository
  implements SurveyFeelingsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(dataSurvey: CreateSurveyFeelingsDto): Promise<SurveyFeelings> {
    return await this.prisma.surveyFeelings.create({ data: dataSurvey });
  }
  async findAll(): Promise<any> {
    return await this.prisma.surveyFeelings.findMany();
  }
  async findById(id: number) {
    return await this.prisma.surveyFeelings.findUnique({
      where: { id },
      include: {
        CandidateUser: true,
      },
    });
  }
  async findOne(candidateUserId: number): Promise<SurveyFeelings> {
    return await this.prisma.surveyFeelings.findUnique({
      where: { candidateUserId },
    });
  }
}
