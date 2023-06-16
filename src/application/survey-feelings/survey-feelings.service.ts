import { Injectable } from '@nestjs/common';
import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
import { SurveyFeelingsRepository } from 'src/application/survey-feelings/repositories/survey-feelings.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';

@Injectable()
export class SurveyFeelingsService {
  constructor(
    private readonly surveyFeelingsSerialize: SurveyFeelingsSerialize,
    private readonly surveyFeelingsRepository: SurveyFeelingsRepository,
  ) {}

  async create(survey: CreateSurveyFeelingsDto) {
    const candidateUserId = await this.surveyFeelingsRepository.findOne(
      survey.candidateUserId,
    );
    if (candidateUserId) {
      throw new Error('this user already has registered survey answers');
    }
    const userAnswers = await this.surveyFeelingsRepository.create(survey);
    return this.surveyFeelingsSerialize.dbToResponseCreate(userAnswers);
  }

  async findAll() {
    const userAnswers = await this.surveyFeelingsRepository.findAll();
    return userAnswers.map((userAnswers) =>
      this.surveyFeelingsSerialize.dbToResponseAll(userAnswers),
    );
  }

  async findById(id: number) {
    const userAnswers = await this.surveyFeelingsRepository.findById(id);
    if (!userAnswers) {
      throw new NotFoundError('Candidate not found');
    }

    return this.surveyFeelingsSerialize.dbToResponseOne(userAnswers);
  }
}
