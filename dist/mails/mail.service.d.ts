import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CandidateUser } from '../application/candidate-user/entities/candidate-user.entity';
export declare class MailService {
    private readonly configService;
    private mailerService;
    constructor(configService: ConfigService, mailerService: MailerService);
    sendActivationEmail(candidate: CandidateUser, token: string): Promise<void>;
    sendPasswordRecover(candidate: CandidateUser, token: string): Promise<void>;
}
