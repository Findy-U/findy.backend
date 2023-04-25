export declare class EmailConfirmationInMemory {
    users: {
        email: string;
        password: string;
        token: string;
    }[];
    private user;
    findRegister(token: string): Promise<any>;
    linkGenerate(email: string): Promise<string>;
    confirmRegistration(token: string): Promise<string>;
}
