import { Test, TestingModule } from '@nestjs/testing';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';

describe('CandidateProfileController', () => {
  let controller: CandidateProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateProfileController],
      providers: [CandidateProfileService],
    }).compile();

    controller = module.get<CandidateProfileController>(CandidateProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
