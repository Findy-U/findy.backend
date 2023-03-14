import { Test, TestingModule } from '@nestjs/testing';
import { CandidateUserService } from './candidate-user.service';


describe('CadidateUserService', () => {

  let service: CandidateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateUserService],
    }).compile();

    service = module.get<CandidateUserService>(CandidateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
