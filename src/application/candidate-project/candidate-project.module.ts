import { Module } from '@nestjs/common';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateProfilePostgresRepository } from '../../common/repositories/candidate-profile/candidate-profile-postgres-repository';
import { CandidateProjectPostgresRepository } from '../../common/repositories/candidate-project/candidate-project-postgres.repository';

@Module({
  controllers: [CandidateProjectController],
  providers: [
    CandidateProjectService,
    PrismaService,
    {
      provide: CandidateProjectRepository,
      useClass: CandidateProjectPostgresRepository,
    },
  ],
})
export class CandidateProjectModule {}
