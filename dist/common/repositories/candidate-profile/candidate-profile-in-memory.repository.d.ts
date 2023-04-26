import { CreateCandidateProfileDto } from '../../../application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from '../../../application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from 'src/application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from '../../../application/candidate-profile/repository/candidate-profile.repository';
export declare class CandidateProfileInMemoryRepository extends CandidateProfileRepository {
    private candidateProfile;
    create(profile: CreateCandidateProfileDto): Promise<any>;
    findAll(): Promise<any>;
    findById(id: number): Promise<CandidateProfile>;
    update(id: number, profile: UpdateCandidateProfileDto): Promise<void>;
    remove(id: number): Promise<void>;
}
