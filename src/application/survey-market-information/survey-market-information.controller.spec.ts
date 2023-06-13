import { Test, TestingModule } from '@nestjs/testing';
import { SurveyMarketInformationController } from './survey-market-information.controller';
import { SurveyMarketInformationService } from './survey-market-information.service';

describe('SurveyMarketInformationController', () => {
  let controller: SurveyMarketInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyMarketInformationController],
      providers: [SurveyMarketInformationService],
    }).compile();

    controller = module.get<SurveyMarketInformationController>(SurveyMarketInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
