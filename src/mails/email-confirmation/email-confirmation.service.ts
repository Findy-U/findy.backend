import { Injectable } from '@nestjs/common';
import { EmailConfirmationInMemory } from 'src/common/repositories/candidate-user/email-confirmation-in-memory.repository';

@Injectable()
export class EmailConfirmationService {

    constructor(private emailConfirmationRepository: EmailConfirmationInMemory) { }

    confirmRegistration(token: string) {
        return this.emailConfirmationRepository.confirmRegistration(token);
    }
}
