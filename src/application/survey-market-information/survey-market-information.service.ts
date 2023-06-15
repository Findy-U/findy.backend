import { Injectable } from '@nestjs/common';
import { CreateSurveyMarketInformationDto } from './dto/create-survey-market-information.dto';
import { UpdateSurveyMarketInformationDto } from './dto/update-survey-market-information.dto';
import { SurveyMarketInformationRepository } from './repositories/survey-market-information.repository';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Injectable()
export class SurveyMarketInformationService {
  constructor(
    private readonly surveyMarketRepository: SurveyMarketInformationRepository,
  ) {}

  async create(dataSurvey: CreateSurveyMarketInformationDto) {
    const userIdExists = await this.surveyMarketRepository.findByIdUser(
      dataSurvey.candidateUserId,
    );

    if (userIdExists) {
      throw new ConflictError('User already has a survey');
    }

    return this.surveyMarketRepository.create(dataSurvey);
  }

  findAll() {
    return this.surveyMarketRepository.findAll();
  }

  findOne(id: number) {
    const survey = this.surveyMarketRepository.findOne(id);

    if (!survey) {
      throw new NotFoundError('Survey not found');
    }

    return survey;
  }

  update(
    id: number,
    updateSurveyMarketInformationDto: UpdateSurveyMarketInformationDto,
  ) {
    return `This action updates a #${id} surveyMarketInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyMarketInformation`;
  }
}
