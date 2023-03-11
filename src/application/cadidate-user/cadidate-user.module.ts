import { Module } from '@nestjs/common';
import { CandidateUserService } from './cadidate-user.service';
import { CadidateUserController } from './cadidate-user.controller';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

@Module({
  controllers: [CadidateUserController],
  providers: [
    CandidateUserService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserInMemoryRepository,
    },
  ],
})
export class CadidateUserModule {}
