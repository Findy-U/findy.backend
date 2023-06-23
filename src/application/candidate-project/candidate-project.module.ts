import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../../common/interfaces/app-config';
import { CandidateProjectMySqlRepository } from '../../common/repositories/candidate-project/candidate-project-mysql.repository';
import { CandidateProjectSqliteRepository } from '../../common/repositories/candidate-project/candidate-project-sqlite.repository';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateProjectController } from './cadidate-project.controller';
import { CandidateProjectService } from './candidate-project.service';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');
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
