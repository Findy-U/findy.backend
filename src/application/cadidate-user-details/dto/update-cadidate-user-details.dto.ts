import { PartialType } from '@nestjs/mapped-types';
import { CreateCadidateUserDetailsDto } from './create-cadidate-user-details.dto';

export class UpdateCadidateUserDetailsDto extends PartialType(
  CreateCadidateUserDetailsDto,
) {}
