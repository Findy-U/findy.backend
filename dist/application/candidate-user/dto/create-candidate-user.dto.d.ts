export declare class CreateCandidateUserDto {
    name: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    roles?: string;
    provider?: string;
    providerId?: string;
    recoverToken?: string;
    recoverTokenExpiresAt?: Date;
    confirmationToken?: string;
    expiredConfirmationToken?: Date;
    activated?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
