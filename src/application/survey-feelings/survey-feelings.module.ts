import { Module } from '@nestjs/common';
import { SurveyFeelingsService } from './survey-feelings.service';
import { SurveyFeelingsController } from './survey-feelings.controller';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { SurveyFeelingsMySqlRepository } from '../../common/repositories/survey-feelings/survey-feelings-mysql.repository';
import { SurveyFeelingsSqliteRepository } from 'src/common/repositories/survey-feelings/survey-feelings-sqlite.repository';
import { SurveyFeelingsRepository } from './repositories/survey-feelings.repository';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';
import { AppConfig } from '../../common/interfaces/app-config';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');
@Module({
  controllers: [SurveyFeelingsController],
  providers: [
    SurveyFeelingsService,
    SurveyFeelingsSerialize,
    PrismaService,
    {
      provide: SurveyFeelingsRepository,
      useClass: SurveyFeelingsMySqlRepository,
    },
  ],
})
export class SurveyFeelingsModule {}
