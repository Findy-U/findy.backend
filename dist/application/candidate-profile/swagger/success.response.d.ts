export declare class CreateProfileSuccessResponse {
    id: number;
    description: string;
    urlGithub: string;
    urlLinkedin: string;
    phone: string;
    availableTime: string;
    areaOfInterest: string;
    candidateUserId: number;
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
export declare class ProfileResponseDelete {
    message: string;
}
export declare class UpdateDTOSwagger {
    name: string;
}
export declare class ProfileUpdateResponse {
    message: string;
}
export declare class ProfileConflictExceptionError {
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
export declare const ApiProfileCreatedResponseCreate: {
    description: string;
    type: typeof CreateProfileSuccessResponse;
};
export declare const ApiProfileResponseFindAll: {
    status: number;
    description: string;
};
export declare const ApiProfileResponseFindById: {
    status: number;
    description: string;
};
export declare const ApiProfileParamFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
export declare const ApiProfileResponseUpdate: {
    status: number;
    description: string;
};
export declare const ApiProfileResponseDelete: {
    status: number;
    description: string;
};
