import { CreateCandidateUserDto } from '../dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from '../dto/update-candidate-user.dto';
import { CandidateUser } from '../entities/candidate-user.entity';

export abstract class CandidateUserRepository {
  abstract create(
    candidate: CreateCandidateUserDto,
    token: string,
    expiredAt: Date,
  ): Promise<CandidateUser>;
  abstract findAll(): Promise<CandidateUser[]>;
  abstract findById(id: number): Promise<any>;
  abstract findByEmail(email: string): Promise<CandidateUser>;
  abstract update(
    id: number,
    cadidate: UpdateCandidateUserDto,
  ): Promise<CandidateUser>;
  abstract findSurveyById(id: number): Promise<any>;
  abstract remove(id: number): Promise<void>;
}
