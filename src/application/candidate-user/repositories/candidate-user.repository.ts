import { CreateCandidateUserDto } from '../dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../dto/update-cadidate-user.dto';
import { CandidateUser } from '../entities/cadidate-user.entity';

export abstract class CandidateUserRepository {
  abstract create(candidate: CreateCandidateUserDto): Promise<CandidateUser>;
  abstract findById(id: number): Promise<CandidateUser>;
  abstract findByEmail(email: string): Promise<CandidateUser>;
  abstract update(id: number, cadidate: UpdateCandidateUserDto): Promise<void>;
  abstract findAll();
}
