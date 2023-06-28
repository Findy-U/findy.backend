import { Injectable } from '@nestjs/common';
import { CreateSurveyNeedsDto } from 'src/application/survey-needs/dto/create-survey-needs.dto';
import { SurveyNeeds } from 'src/application/survey-needs/entities/survey-needs.entity';
import { SurveyNeedsRepository } from 'src/application/survey-needs/repositories/survey-needs.repository';
import { PrismaMySqlService } from '../../../config/database/prisma/prisma-mysql.service';

@Injectable()
export class SurveyNeedsMySqlRepository implements SurveyNeedsRepository {
  constructor(private readonly prisma: PrismaMySqlService) {}

  async create(dataSurvey: CreateSurveyNeedsDto): Promise<SurveyNeeds> {
    return await this.prisma.surveyNeeds.create({ data: dataSurvey });
  }
  async findAll(): Promise<any> {
    return await this.prisma.surveyNeeds.findMany();
  }
  async findById(id: number) {
    return await this.prisma.surveyNeeds.findUnique({
      where: { id },
      include: {
        CandidateUser: true,
      },
    });
  }
  async findOne(candidateUserId: number): Promise<SurveyNeeds> {
    return await this.prisma.surveyNeeds.findUnique({
      where: { candidateUserId },
    });
  }
}