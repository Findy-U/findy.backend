import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CandidateUser } from '../application/candidate-user/entities/candidate-user.entity';
import { EmailConfirmationInMemory } from '../common/repositories/candidate-user/email-confirmation-in-memory.repository';
export declare class MailService {
    private mailerService;
    private readonly configService;
    private emailConfirmationRepository;
    constructor(mailerService: MailerService, configService: ConfigService, emailConfirmationRepository: EmailConfirmationInMemory);
    confirmRegistration(token: string): Promise<string>;
    sendPasswordRecover(candidate: CandidateUser, token: string): Promise<void>;
}
