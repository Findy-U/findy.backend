import { Module } from '@nestjs/common';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateProjectMySqlRepository } from '../../common/repositories/candidate-project/candidate-project-mysql.repository';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    PrismaService,
    {
      provide: CandidateProjectRepository,
      useClass: CandidateProjectMySqlRepository,
    },
  ],
})
export class CandidateProjectModule {}
