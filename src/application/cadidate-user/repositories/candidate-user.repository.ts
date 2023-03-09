import { CreateCadidateUserDto } from '../dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from '../dto/update-cadidate-user.dto';
import { CadidateUser } from '../entities/cadidate-user.entity';

export abstract class CandidateUserRepository {
  abstract create(candidate: CreateCadidateUserDto): Promise<CadidateUser>;
  abstract findById(id: number): Promise<CadidateUser>;
  abstract findByEmail(email: string): Promise<CadidateUser>;
  abstract update(id: number, cadidate: UpdateCadidateUserDto): Promise<void>;
  abstract findAll();
}
