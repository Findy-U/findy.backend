import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CandidateUserMySqlRepository } from 'src/common/repositories/candidate-user/candidate-user-mysql.repository';
import { MailService } from 'src/mails/mail.service';
import { AppConfig } from '../../common/interfaces/app-config';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

const configService = new ConfigService<AppConfig>();
const modeProduction = configService.get<string>('modeProduction');
@Module({
  imports: [],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    PrismaService,
    MailService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserMySqlRepository,
    },
  ],
})
export class CandidateUserModule {}
