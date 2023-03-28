import { CreateCandidateProfileDto } from "../dto/create-candidate-profile.dto";
import { UpdateCandidateProfileDto } from "../dto/update-candidate-profile.dto";
import { CandidateProfile } from "../entities/candidate-profile.entity";

export abstract class CandidateProfileRepository {
    abstract create(profile: CreateCandidateProfileDto): any;
    abstract findAll(): Promise<any>;
    abstract findById(id: number): Promise<CandidateProfile>;
    abstract update(id: number, profile: UpdateCandidateProfileDto);
    abstract delete(id: number): void;
}