import { CreateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../../../application/candidate-user-details/entities/candidate-user-details.entity';
import { CandidateUserDetailsRepository } from '../../../application/candidate-user-details/repositories/candidate-user-details.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
export declare class CandidateUserDetailsPostgresRepository implements CandidateUserDetailsRepository {
    private readonly prisma;
    constructor(prisma: PrismaPostgresService);
    create(candidate: CreateCandidateUserDetailsDto): Promise<CandidateUserDetailsEntity>;
    findAll(): Promise<CandidateUserDetailsEntity[]>;
    findById(id: number): Promise<import("@internal/prisma-postgres/client").CandidateUserDetails>;
    findUnique(candidateUserId: number): Promise<CandidateUserDetailsEntity>;
    update(id: number, details: UpdateCandidateUserDetailsDto): Promise<CandidateUserDetailsEntity>;
}
