import { Module } from '@nestjs/common';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';

@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    PrismaService,
    {
      provide: CandidateProjectRepository,
      useClass: CandidateProjectSqliteRepository,
    },
  ],
})
export class CandidateProjectModule {}
