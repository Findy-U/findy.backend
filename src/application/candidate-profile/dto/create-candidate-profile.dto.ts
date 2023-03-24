import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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

    @IsNotEmpty()
    @IsNumber()
    idUserCandidate: number;

}
