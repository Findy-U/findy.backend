import { CreateCandidateUserDto } from '../dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../dto/update-cadidate-user.dto';
import { CandidateUser } from '../entities/candidate-user.entity';
export declare abstract class CandidateUserRepository {
    abstract create(candidate: CreateCandidateUserDto): Promise<CandidateUser>;
    abstract findAll(): Promise<CandidateUser[]>;
    abstract findById(id: number): any;
    abstract findByEmail(email: string): Promise<CandidateUser>;
    abstract update(id: number, cadidate: UpdateCandidateUserDto): Promise<CandidateUser>;
    abstract remove(id: number): Promise<void>;
}
