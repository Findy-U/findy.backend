import { PartialType } from '@nestjs/swagger';
import { CreateCandidateProfileDto } from './create-candidate-profile.dto';

export class UpdateCandidateProfileDto extends PartialType(
  CreateCandidateProfileDto,
) {}
