import { Injectable } from '@nestjs/common';
import { CreateSurveyNeedsDto } from 'src/application/survey-needs/dto/create-survey-needs.dto';
import { SurveyNeeds } from 'src/application/survey-needs/entities/survey-needs.entity';
import { SurveyNeedsRepository } from 'src/application/survey-needs/repositories/survey-needs.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class SurveyNeedsSqliteRepository implements SurveyNeedsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dataSurvey: CreateSurveyNeedsDto): Promise<any> {
    try {
      const survey = await this.prisma.surveyNeeds.create({
        data: {
          candidateUserId: dataSurvey.candidateUserId,
        },
      });

      await Promise.all(
        dataSurvey.principalDifficulties.map(async (item) => {
          await this.prisma.principalDifficulties.create({
            data: {
              principalDifficulties: item,
              surveyNeedsId: survey.id,
            },
          });
        }),
      );

      await Promise.all(
        dataSurvey.findyHelp.map(async (item) => {
          await this.prisma.findyHelp.create({
            data: { findyHelp: item, surveyNeedsId: survey.id },
          });
        }),
      );
      return survey;
    } catch (error) {
      console.log(error);
    }
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
  async findOne(candidateUserId: number): Promise<any> {
    return await this.prisma.surveyNeeds.findUnique({
      where: { candidateUserId },
    });
  }
}
