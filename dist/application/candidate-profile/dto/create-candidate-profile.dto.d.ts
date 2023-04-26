export declare class CreateCandidateProfileDto {
    description: string;
    phone: string;
    urlGithub: string;
    urlLinkedin: string;
    profileSkills?: number[];
    occupationArea?: string[];
    others?: string[];
    areaOfInterest: string;
    availableTime: string;
    candidateUserId?: number | null;
    candidateUser?: any;
}
