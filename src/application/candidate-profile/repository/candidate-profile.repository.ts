import { CreateCandidateProfileDto } from '../dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from '../dto/update-candidate-profile.dto';
import { CandidateProfile } from '../entities/candidate-profile.entity';

export abstract class CandidateProfileRepository {
  abstract create(
    profile: CreateCandidateProfileDto,
  ): Promise<CandidateProfile>;
  abstract findAll(): Promise<CandidateProfile[]>;
  abstract findById(id: number): Promise<CandidateProfile>;
  abstract update(
    id: number,
    profile: UpdateCandidateProfileDto,
  ): Promise<void>;
  abstract remove(id: number): Promise<void>;
}
