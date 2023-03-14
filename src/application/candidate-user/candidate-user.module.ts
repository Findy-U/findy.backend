import { Module } from '@nestjs/common';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserController } from './candidate-user.controller';
import { EmailConfirmationModule } from 'src/mails/email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from 'src/mails/email-confirmation/email-confirmation.service';
import { EmailConfirmationInMemory } from 'src/common/repositories/candidate-user/email-confirmation-in-memory.repository';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { PrismaModule } from '../../config/database/prisma/prisma.module';
import { PrismaService } from '../../config/database/prisma/prisma.service';

@Module({
  imports: [EmailConfirmationModule],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    EmailConfirmationService, 
    EmailConfirmationInMemor,
    PrismaService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserSqliteRepository,
    },
  ],
})
export class CandidateUserModule {}
