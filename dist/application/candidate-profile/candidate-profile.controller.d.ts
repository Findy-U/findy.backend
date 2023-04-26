import { CandidateProfileService } from './candidate-profile.service';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';
export declare class CandidateProfileController {
    private readonly candidateProfileService;
    constructor(candidateProfileService: CandidateProfileService);
    create(createCandidateProfileDto: CreateCandidateProfileDto): Promise<import("./entities/candidate-profile.entity").CandidateProfile>;
    findAll(): Promise<import("./entities/candidate-profile.entity").CandidateProfile[]>;
    findOne(id: string): Promise<import("./entities/candidate-profile.entity").CandidateProfile>;
    update(id: string, updateCandidateProfileDto: UpdateCandidateProfileDto): Promise<string>;
    remove(id: string): Promise<void>;
}
