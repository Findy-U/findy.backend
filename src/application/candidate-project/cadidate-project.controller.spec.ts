import { Test, TestingModule } from '@nestjs/testing';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';

describe('CadidateProjectController', () => {
  let controller: CandidateProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateProjectController],
      providers: [CandidateProjectService],
    }).compile();

    controller = module.get<CandidateProjectController>(
      CandidateProjectController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
