import { Module } from '@nestjs/common';
import { SurveyNeedsService } from './survey-needs.service';
import { SurveyNeedsController } from './survey-needs.controller';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyNeedsMySqlRepository } from '../../common/repositories/survey-needs/survey-needs-mysql.repository';
import { SurveyNeedsRepository } from './repositories/survey-needs.repository';
import { SurveyNeedsSerialize } from 'src/common/serializers/survey-needs.serialize';

@Module({
  controllers: [SurveyNeedsController],
  providers: [
    SurveyNeedsService,
    SurveyNeedsSerialize,
    PrismaService,
    {
      provide: SurveyNeedsRepository,
      useClass: SurveyNeedsMySqlRepository,
    },
  ],
})
export class SurveyNeedsModule {}
