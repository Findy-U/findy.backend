import { Test, TestingModule } from '@nestjs/testing';
import { SurveyProfessionalInformationService } from './survey-professional-situation.service';

describe('SurveyProfessionalInformationService', () => {
  let service: SurveyProfessionalInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyProfessionalInformationService],
    }).compile();

    service = module.get<SurveyProfessionalInformationService>(
      SurveyProfessionalInformationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
