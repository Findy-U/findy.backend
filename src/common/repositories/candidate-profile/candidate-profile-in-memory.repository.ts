import { Injectable } from "@nestjs/common";
import { CreateCandidateProfileDto } from "src/application/candidate-profile/dto/create-candidate-profile.dto";
import { UpdateCandidateProfileDto } from "src/application/candidate-profile/dto/update-candidate-profile.dto";
import { CandidateProfile } from "src/application/candidate-profile/entities/candidate-profile.entity";
import { CandidateProfileRepository } from "src/application/candidate-profile/repository/candidate-profile.repository";

@Injectable()
export class CandidateProfileInMemoryRepository extends CandidateProfileRepository {
    private candidateProfile = [
        /* {
             description: "Fulano de tal de tal área",
             skills: "Muitas skills",
             professionalExperience: "Profissional",
             urlGithub: "github.com/fulano",
             urlLinkedin: "linkedin.com/in/fulano",
             phone: "0000-0000",
             idCandidateUser: 1, 
         } */
    ];

    async create(profile: CreateCandidateProfileDto): Promise<any> {
        await this.candidateProfile.push(profile);
        return this.candidateProfile[this.candidateProfile.length - 1];
    }
    async findAll(): Promise<any> {
        return this.candidateProfile;
    }

    async findById(id: number): Promise<CandidateProfile> {
        return await this.candidateProfile.find(p => p.idUserCandidate === id);
    }
    update(id: number, profile: UpdateCandidateProfileDto) {
        return "Esse método faz a atualização do perfil do usuário";
    }
    delete(id: number): void {
        const index = this.candidateProfile.findIndex((p, i) => {
            p.idCandidateUser === id
        });
        this.candidateProfile.splice(index, 1);
    }

}