import { Module } from '@nestjs/common';
import { CandidateProjectMySqlRepository } from '../../common/repositories/candidate-project/candidate-project-mysql.repository';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    {
      provide: CandidateProjectRepository,
      useClass:
        modeProduction === 'true'
          ? CandidateProjectMySqlRepository
          : CandidateProjectSqliteRepository,
    },
  ],
})
export class CandidateProjectModule {}
