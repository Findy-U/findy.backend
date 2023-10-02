import { Module } from '@nestjs/common';
import { CandidateProjectRepositoryMySQL } from '../../common/repositories/candidate-project/candidate-project-mysql.repository';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';
@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    {
      provide: CandidateProjectRepository,
      useClass: CandidateProjectRepositoryMySQL,
    },
  ],
})
export class CandidateProjectModule {}
