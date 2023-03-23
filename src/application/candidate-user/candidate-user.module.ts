import { Module } from '@nestjs/common';
import { EmailConfirmationModule } from 'src/mails/email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from 'src/mails/email-confirmation/email-confirmation.service';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

import { PrismaService } from '../../config/database/prisma/prisma.service';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';

@Module({
  imports: [EmailConfirmationModule],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    EmailConfirmationService,
    PrismaService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserSqliteRepository,
    },
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserInMemoryRepository,
    },
  ],
})
export class CandidateUserModule {}
