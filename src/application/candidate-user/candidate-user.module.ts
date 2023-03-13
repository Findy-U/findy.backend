import { Module } from '@nestjs/common';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

@Module({
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserInMemoryRepository,
    },
  ],
})
export class CandidateUserModule {}
