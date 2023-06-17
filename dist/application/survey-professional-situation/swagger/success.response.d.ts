export declare class CreateSurveyProfessionalSituationResponse {
    id: number;
    situation: string;
    ocupationArea: string;
    objectives: string;
    candidateUserId: number;
    createdAt: Date;
}
export declare class ProfessionalSituationResponseFind {
    id: number;
}
export declare class ProfessionalSituationConflictExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class UnauthorizedExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class ForbidenExceptiomError {
    statusCode: number;
    message: string;
    error: string;
}
export declare const ApiProfessionalSituationCreatedResponseCreate: {
    description: string;
    type: typeof CreateSurveyProfessionalSituationResponse;
};
export declare const ApiProfessionalSituationConflictResponseCreate: {
    description: string;
    type: typeof ProfessionalSituationConflictExceptionError;
};
