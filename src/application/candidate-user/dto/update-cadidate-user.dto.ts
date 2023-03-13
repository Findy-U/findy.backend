import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateUserDto } from './create-cadidate-user.dto';

export class UpdateCandidateUserDto extends PartialType(
  CreateCandidateUserDto,
) {}
