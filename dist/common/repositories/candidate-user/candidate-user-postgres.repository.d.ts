import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
import { CandidateUserSerialize } from '../../serializers/candidate-user.serialize';
export declare class CandidateUserPostgresRepository implements CandidateUserRepository {
    private readonly prisma;
    private readonly candidateUserSerialize;
    constructor(prisma: PrismaPostgresService, candidateUserSerialize: CandidateUserSerialize);
    create(candidate: CreateCandidateUserDto): Promise<CandidateUser>;
    findAll(): Promise<CandidateUser[]>;
    findById(id: number): Promise<any>;
    findByEmail(email: string): Promise<CandidateUser>;
    update(id: number, cadidate: UpdateCandidateUserDto): Promise<CandidateUser>;
    remove(id: number): Promise<void>;
}
