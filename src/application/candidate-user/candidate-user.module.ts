import { Module } from '@nestjs/common';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserController } from './candidate-user.controller';
import { EmailConfirmationModule } from 'src/mails/email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from 'src/mails/email-confirmation/email-confirmation.service';
import { EmailConfirmationInMemory } from 'src/common/repositories/candidate-user/email-confirmation-in-memory.repository';
@Module({
  imports: [EmailConfirmationModule],
  controllers: [CandidateUserController],
  providers: [EmailConfirmationService, EmailConfirmationInMemory, CandidateUserService],
})
export class CandidateUserModule { }
