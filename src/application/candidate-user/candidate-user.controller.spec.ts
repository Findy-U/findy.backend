import { Test, TestingModule } from '@nestjs/testing';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';

describe('CadidateUserController', () => {
  let controller: CandidateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateUserController],
      providers: [CandidateUserService],
    }).compile();

    controller = module.get<CandidateUserController>(CandidateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
