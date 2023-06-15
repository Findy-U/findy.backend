import { CreateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../../../application/candidate-user-details/entities/candidate-user-details.entity';
import { CandidateUserDetailsRepository } from '../../../application/candidate-user-details/repositories/candidate-user-details.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
export declare class CandidateUserDetailsSqliteRepository implements CandidateUserDetailsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(candidate: CreateCandidateUserDetailsDto): Promise<CandidateUserDetailsEntity>;
    findAll(): Promise<any[]>;
    findById(id: number): Promise<import(".prisma/client").CandidateUserDetails & {
        CandidateUser: import(".prisma/client").CandidateUser;
    }>;
    findUnique(candidateUserId: number): Promise<CandidateUserDetailsEntity>;
    update(id: number, details: UpdateCandidateUserDetailsDto): Promise<CandidateUserDetailsEntity>;
}
