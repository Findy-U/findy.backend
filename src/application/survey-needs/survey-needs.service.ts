import { Injectable } from '@nestjs/common';
import { CreateSurveyNeedsDto } from './dto/create-survey-needs.dto';
import { SurveyNeedsRepository } from 'src/application/survey-needs/repositories/survey-needs.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { SurveyNeedsSerialize } from 'src/common/serializers/survey-needs.serialize';

@Injectable()
export class SurveyNeedsService {
  constructor(
    private readonly surveyNeedsSerialize: SurveyNeedsSerialize,
    private readonly surveyNeedsRepository: SurveyNeedsRepository,
  ) {}

  async create(survey: CreateSurveyNeedsDto) {
    const candidateUserId = await this.surveyNeedsRepository.findOne(
      survey.candidateUserId,
    );
    if (candidateUserId) {
      throw new Error('this user already has registered survey needs');
    }
    const userAnswers = await this.surveyNeedsRepository.create(survey);
    return this.surveyNeedsSerialize.dbToResponseCreate(userAnswers);
  }

  async findAll() {
    const userAnswers = await this.surveyNeedsRepository.findAll();
    return userAnswers.map((userAnswers) =>
      this.surveyNeedsSerialize.dbToResponseAll(userAnswers),
    );
  }

  async findById(id: number) {
    const userAnswers = await this.surveyNeedsRepository.findById(id);
    if (!userAnswers) {
      throw new NotFoundError('Candidate not found');
    }

    return this.surveyNeedsSerialize.dbToResponseOne(userAnswers);
  }
}
