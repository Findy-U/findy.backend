import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateUserDto } from './create-candidate-user.dto';

export class UpdateCandidateUserDto extends PartialType(
  CreateCandidateUserDto,
) { }
