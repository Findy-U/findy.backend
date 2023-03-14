import { Module } from '@nestjs/common';
import { EmailConfirmationInMemory } from 'src/common/repositories/candidate-user/email-confirmation-in-memory.repository';
import { EmailConfirmationService } from './email-confirmation.service';

@Module({
  providers: [EmailConfirmationService, EmailConfirmationInMemory]
})
export class EmailConfirmationModule { }
