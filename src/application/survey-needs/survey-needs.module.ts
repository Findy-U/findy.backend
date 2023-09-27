import { Module } from '@nestjs/common';
import { SurveyNeedsSerialize } from 'src/common/serializers/survey-needs.serialize';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyNeedsRepositoryMySQL } from '../../common/repositories/survey-needs/survey-needs-mysql.repository';
import { SurveyNeedsRepository } from './repositories/survey-needs.repository';
import { SurveyNeedsController } from './survey-needs.controller';
import { SurveyNeedsService } from './survey-needs.service';

@Module({
  controllers: [SurveyNeedsController],
  providers: [
    SurveyNeedsService,
    SurveyNeedsSerialize,
    PrismaService,
    {
      provide: SurveyNeedsRepository,
      useClass: SurveyNeedsRepositoryMySQL,
    },
  ],
})
export class SurveyNeedsModule {}
