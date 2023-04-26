import { JwtService } from '@nestjs/jwt';
import { CandidateUserInterface } from '../../common/interfaces/candidate-user.interface';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { MailService } from '../../mails/mail.service';
import { GoogleUser } from '../../models/google-user';
import { CandidateUserService } from '../candidate-user/candidate-user.service';
import { RecoverPasswordDto } from '../candidate-user/dto/recover-password.dto';
export declare class AuthService {
    private readonly candidateUserService;
    private readonly candidateUserSerialize;
    private readonly jwtService;
    private readonly mailService;
    constructor(candidateUserService: CandidateUserService, candidateUserSerialize: CandidateUserSerialize, jwtService: JwtService, mailService: MailService);
    login(user: CandidateUserInterface): Promise<{
        access_token: string;
    }>;
    validateLocalAuth(email: string, password: string): Promise<import("../candidate-user/entities/candidate-user.entity").CandidateUser>;
    validateGoogleAuth(googleUser: GoogleUser): Promise<import("../candidate-user/entities/candidate-user.entity").CandidateUser | {
        id: any;
        name: any;
        email: any;
        roles: any;
    }>;
    sendRecoverPasswordEmail(email: string): Promise<void>;
    resetPassword(id: number, recoverPassword: RecoverPasswordDto): Promise<void>;
}
