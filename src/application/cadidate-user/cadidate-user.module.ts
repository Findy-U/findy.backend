import { Module } from '@nestjs/common';
import { CadidateUserService } from './cadidate-user.service';
import { CadidateUserController } from './cadidate-user.controller';

@Module({
  controllers: [CadidateUserController],
  providers: [CadidateUserService]
})
export class CadidateUserModule {}
