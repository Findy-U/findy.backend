import { Injectable } from '@nestjs/common';
import { ConflictError } from 'src/common/exceptions/conflict-error';
import { NotFoundError } from 'src/common/exceptions/not-found.error';
import { CreateSurveyProfessionalSituationDto } from './dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';

@Injectable()
export class SurveyProfessionalSituationService {
  constructor(
    private readonly surveyProfessionalRepository: SurveyProfessionalSituationRepository,
  ) {}

  async create(dataSurvey: CreateSurveyProfessionalSituationDto) {
    const userIdExists = await this.surveyProfessionalRepository.findByIdUser(
      dataSurvey.candidateUserId,
    );

    if (userIdExists) {
      throw new ConflictError('User already has a survey');
    }

    return this.surveyProfessionalRepository.create(dataSurvey);
  }

  async findAll() {
    const surveys = this.surveyProfessionalRepository.findAll();

    if (!surveys) {
      throw new NotFoundError('No surveys found');
    }

    return surveys;
  }

  async findById(id: number) {
    const survey = await this.surveyProfessionalRepository.findById(id);

    if (!survey) {
      throw new NotFoundError('Survey not found');
    }

    return survey;
  }
}
