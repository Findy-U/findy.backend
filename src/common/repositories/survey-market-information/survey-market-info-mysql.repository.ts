import { Injectable } from '@nestjs/common';
import { CreateSurveyMarketInformationDto } from '../../../application/survey-market-information/dto/create-survey-market-information.dto';
import { SurveyMarketInformationRepository } from '../../../application/survey-market-information/repositories/survey-market-information.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class SurveyMarketInformationRepositoryMySQL
  implements SurveyMarketInformationRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(dataSurvey: CreateSurveyMarketInformationDto): Promise<any> {
    return this.prisma.surveyMarketInformation.create({ data: dataSurvey });
  }

  async findAll(): Promise<any> {
    return await this.prisma.surveyMarketInformation.findMany();
  }

  async findOne(id: number): Promise<any> {
    return await this.prisma.surveyMarketInformation.findUnique({
      where: { id },
    });
  }

  async findByIdUser(idUser: number): Promise<any> {
    return await this.prisma.surveyMarketInformation.findUnique({
      where: { candidateUserId: idUser },
    });
  }

  update(id: number, updateSurveyMarketInformationDto: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
