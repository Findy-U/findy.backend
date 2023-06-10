import { CreateCandidateUserDetailsDto } from '../dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../entities/candidate-user-details.entity';

export abstract class CandidateUserDetailsRepository {
  abstract create(
    details: CreateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity>;
  abstract findAll(): Promise<CandidateUserDetailsEntity[]>;
  abstract findById(id: number);
  abstract findUnique(
    candidateUserId: number,
  ): Promise<CandidateUserDetailsEntity>;
  abstract update(
    id: number,
    candidate: UpdateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity>;
}
