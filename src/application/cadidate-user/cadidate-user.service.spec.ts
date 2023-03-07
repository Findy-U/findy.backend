import { Test, TestingModule } from '@nestjs/testing';
import { CadidateUserService } from './cadidate-user.service';

describe('CadidateUserService', () => {
  let service: CadidateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadidateUserService],
    }).compile();

    service = module.get<CadidateUserService>(CadidateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
