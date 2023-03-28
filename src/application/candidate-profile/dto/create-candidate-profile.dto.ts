import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CandidateUser } from "src/application/candidate-user/entities/candidate-user.entity";

export class CreateCandidateProfileDto {

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    skills: string;

    @IsNotEmpty()
    @IsString()
    professionalExperience: string;

    @IsString()
    urlGithub: string;

    @IsString()
    urlLinkedin: string;

    @IsString()
    phone: string;

    @IsNumber()
    idUserCandidate?: number;

    candidateUser: CandidateUser;

}
