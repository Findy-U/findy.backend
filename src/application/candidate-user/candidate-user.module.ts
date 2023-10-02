import { Module } from '@nestjs/common';
import { MailService } from 'src/mails/mail.service';
import { CandidateUserRepositoryMySQL } from '../../common/repositories/candidate-user/candidate-user-mysql.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

@Module({
  imports: [],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    MailService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserRepositoryMySQL,
    },
  ],
})
export class CandidateUserModule {}
