import { Module } from '@nestjs/common';
import { CandidateProjectMySqlRepository } from '../../common/repositories/candidate-project/candidate-project-mysql.repository';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    PrismaService,
    {
      provide: CandidateProjectRepository,
      useClass: modeProduction
        ? CandidateProjectMySqlRepository
        : CandidateProjectSqliteRepository,
    },
  ],
})
export class CandidateProjectModule {}
