export declare class CreateSurveyMarketInformationSuccessResponse {
    id: number;
    metFindy: string;
    friendName: string;
    friendEmail: string;
    candidateUserId: number;
    createdAt: Date;
}
export declare class ProfileResponseFind {
    id: number;
    description: string;
    urlGithub: string;
    urlLinkedin: string;
    phone: string;
    availableTime: string;
    areaOfInterest: string;
    candidateUserId: number;
    candidateUser: string[];
    occupationArea: string[];
    profileSkills: string[];
}
export declare class SurveyMarketInfoConflictExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class CandidateUserNotFoundExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class ProfileNotFoundExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class BadRequestExceptionError {
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
export declare class RolesResponse {
    id: number;
    title: string;
}
export declare class StackResponse {
    id: number;
    title: string;
}
export declare class NotFoundExceptionErrorRoles {
    statusCode: number;
    message: string;
    error: string;
}
export declare class NotFoundExceptionErrorStacks {
    statusCode: number;
    message: string;
    error: string;
}
export declare const ApiMarketInformationCreatedResponseCreate: {
    description: string;
    type: typeof CreateSurveyMarketInformationSuccessResponse;
};
export declare const ApiMarketInformationConflictResponseCreate: {
    description: string;
    type: typeof SurveyMarketInfoConflictExceptionError;
};
export declare const ApiMarketInformationResponseFindAll: {
    status: number;
    description: string;
};
export declare const ApiMarketInformationResponseFindById: {
    status: number;
    description: string;
};
export declare const ApiMarketInformationParamFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
