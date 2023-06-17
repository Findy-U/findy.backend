import { Test, TestingModule } from '@nestjs/testing';
import { SurveyProfessionalSituationController } from './survey-professional-situation.controller';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';

describe('SurveyProfessionalSituationController', () => {
  let controller: SurveyProfessionalSituationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyProfessionalSituationController],
      providers: [SurveyProfessionalSituationService],
    }).compile();

    controller = module.get<SurveyProfessionalSituationController>(
      SurveyProfessionalSituationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
