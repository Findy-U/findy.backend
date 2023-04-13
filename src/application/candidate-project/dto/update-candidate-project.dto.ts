import { PartialType } from '@nestjs/swagger';
import { CreateCandidateProjectDto } from './create-candidate-project.dto';

export class UpdateCandidateProjectDto extends PartialType(
  CreateCandidateProjectDto,
) {}
