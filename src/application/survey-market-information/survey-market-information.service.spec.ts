import { Test, TestingModule } from '@nestjs/testing';
import { SurveyMarketInformationService } from './survey-market-information.service';

describe('SurveyMarketInformationService', () => {
  let service: SurveyMarketInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyMarketInformationService],
    }).compile();

    service = module.get<SurveyMarketInformationService>(
      SurveyMarketInformationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
