import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateUserDetailsDto } from './create-candidate-user-details.dto';

export class UpdateCandidateUserDetailsDto extends PartialType(
  CreateCandidateUserDetailsDto,
) {}
