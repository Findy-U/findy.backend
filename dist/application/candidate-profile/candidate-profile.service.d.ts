import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';
import { CandidateProfile } from './entities/candidate-profile.entity';
import { CandidateProfileRepository } from './repository/candidate-profile.repository';
export declare class CandidateProfileService {
    private readonly candidateUserRepository;
    private candidate;
    constructor(candidateUserRepository: CandidateProfileRepository);
    create(createCandidateProfileDto: CreateCandidateProfileDto): Promise<CandidateProfile>;
    findAll(): Promise<CandidateProfile[]>;
    findOne(id: number): Promise<CandidateProfile>;
    update(id: number, updateCandidateProfileDto: UpdateCandidateProfileDto): Promise<string>;
    remove(id: number): Promise<void>;
}
