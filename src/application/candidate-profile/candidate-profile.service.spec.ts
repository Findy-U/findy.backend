import { Test, TestingModule } from '@nestjs/testing';
import { CandidateProfileService } from './candidate-profile.service';

describe('CandidateProfileService', () => {
  let service: CandidateProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateProfileService],
    }).compile();

    service = module.get<CandidateProfileService>(CandidateProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
