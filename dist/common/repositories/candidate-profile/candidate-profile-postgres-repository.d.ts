import { CreateCandidateProfileDto } from '../../../application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from '../../../application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from '../../../application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from '../../../application/candidate-profile/repository/candidate-profile.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
export declare class CandidateProfilePostgresRepository implements CandidateProfileRepository {
    private readonly prisma;
    constructor(prisma: PrismaPostgresService);
    create(profile: CreateCandidateProfileDto): Promise<any>;
    findAll(): Promise<CandidateProfile[]>;
    findById(id: number): Promise<CandidateProfile>;
    update(id: number, profile: UpdateCandidateProfileDto): Promise<void>;
    remove(id: number): Promise<void>;
}
