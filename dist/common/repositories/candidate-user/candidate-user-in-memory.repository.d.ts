import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
export declare class CandidateUserInMemoryRepository implements CandidateUserRepository {
    private candidate;
    create(user: CreateCandidateUserDto): Promise<CandidateUser>;
    findByEmail(email: string): Promise<CandidateUser>;
    findById(id: number): Promise<CandidateUser>;
    findAll(): Promise<CandidateUser[]>;
    update(id: number, cadidate: UpdateCandidateUserDto): Promise<CandidateUser>;
    remove(id: number): Promise<void>;
}
