import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthRequest } from '../../common/interfaces/authentication/auth-request';
import { RecoverPasswordDto } from '../candidate-user/dto/recover-password.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly configService;
    constructor(authService: AuthService, configService: ConfigService);
    login(req: AuthRequest): Promise<{
        access_token: string;
    }>;
    signInWithGoogle(): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<void>;
    sendRecoverPasswordEmail(email: string): Promise<{
        message: string;
    }>;
    resetPassword(id: number, recoverPaswor: RecoverPasswordDto): Promise<{
        message: string;
    }>;
}
