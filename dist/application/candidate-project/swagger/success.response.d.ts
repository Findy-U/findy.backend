export declare class CreatesuccessResponse {
    id: number;
    name: string;
    projectScope: string;
    urlTeamSelection: string;
    responsible: string;
    contactResponsible: string;
    urlLinkediResponsible: string;
    findyHelp: string;
    contactLeaders: string;
    candidateUserId: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ResponseFind {
    id: number;
    name: string;
    email: string;
    roles: string;
    provider: string;
    providerId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ProjectResponseFind {
    id: number;
    name: string;
    projectScope: string;
    urlTeamSelection: string;
    responsible: string;
    contactResponsible: string;
    urlLinkediResponsible: string;
    candidateUserId: number;
    findyHelp: string;
    isActive: boolean;
    contactLeaders: string;
    createdAt: Date;
    updatedAt: Date;
    language: number[];
    professional: number[];
}
export declare class ProjectResponseDelete {
    message: string;
}
export declare class UpdateDTOSwagger {
    name: string;
}
export declare class UpdateResponse {
    message: string;
}
export declare class ConflictExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class NotFoundExceptionError {
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
export declare const ApiCreatedResponseCreate: {
    description: string;
    type: typeof CreatesuccessResponse;
};
export declare const ApiConflictResponseCreate: {
    description: string;
    type: typeof ConflictExceptionError;
};
export declare const ApiResponseFindAll: {
    status: number;
    description: string;
};
export declare const ApiResponseFindById: {
    status: number;
    description: string;
};
export declare const ApirParamFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
export declare const ApiResponseUpdate: {
    status: number;
    description: string;
};
export declare const ApiResponseDelete: {
    status: number;
    description: string;
};
export declare const ApiResponseRoles: {
    status: number;
    description: string;
};
export declare const ApiResponseRoleById: {
    status: number;
    description: string;
};
export declare const ApiResponseStacks: {
    status: number;
    description: string;
};
export declare const ApiResponseStackById: {
    status: number;
    description: string;
};
export declare const ApirParamRoleFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
export declare const ApirParamStackFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
