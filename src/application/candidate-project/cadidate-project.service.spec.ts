import { Test, TestingModule } from '@nestjs/testing';
import { CandidateProjectService } from './candidate-project.service';

describe('CadidateProjectService', () => {
  let service: CandidateProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateProjectService],
    }).compile();

    service = module.get<CandidateProjectService>(CandidateProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
