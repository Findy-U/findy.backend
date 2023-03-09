import { Test, TestingModule } from '@nestjs/testing';
import { CadidateUserController } from './cadidate-user.controller';
import { CandidateUserService } from './cadidate-user.service';

describe('CadidateUserController', () => {
  let controller: CadidateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadidateUserController],
      providers: [CandidateUserService],
    }).compile();

    controller = module.get<CadidateUserController>(CadidateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
