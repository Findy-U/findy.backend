import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SALT_BCRYPT } from '../../common/constants/constants';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { UnauthorizedError } from '../../common/exceptions/unauthorized.error';
import { generateTemporaryToken } from '../../common/helpers/generate-token';
import { AuthProviderType } from '../../common/interfaces/authentication/auth-provider.enum';
import { GoogleUser } from '../../common/interfaces/authentication/google-user';
import { Role } from '../../common/interfaces/authentication/roles.enum';
import { UserPayload } from '../../common/interfaces/candidate-user/candidate-user-payload';
import { CandidateUserInterface } from '../../common/interfaces/candidate-user/candidate-user.interface';
import { MailService } from '../../mails/mail.service';
import { CandidateUserService } from '../candidate-user/candidate-user.service';
import { RecoverPasswordDto } from '../candidate-user/dto/recover-password.dto';
import { ForbiddenError } from '../../common/exceptions/forbidden.error';
import { ExpireTokenValidationService } from '../../common/helpers/token-send-recover-email';

@Injectable()
export class AuthService {
  private readonly EXPIRATION_TIME: number = 48;
  private readonly temporaryToken = new generateTemporaryToken(
    this.EXPIRATION_TIME,
  );
  constructor(
    private readonly candidateUserService: CandidateUserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async login(user: CandidateUserInterface) {
    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      completeSurvey: user.completeSurvey,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateLocalAuth(email: string, password: string) {
    const candidate = await this.candidateUserService.findByEmail(email);

    if (candidate && candidate.activated === false) {
      throw new ForbiddenError('Account is not activated');
    }

    if (candidate && candidate.activated) {
      const isPasswordValid = await bcrypt.compare(
        password,
        candidate.password,
      );
      if (isPasswordValid) {
        return candidate;
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }

  async validateGoogleAuth(googleUser: GoogleUser) {
    const candidate = await this.candidateUserService.findByEmail(
      googleUser.email,
    );
    if (!candidate) {
      const newCandidate = await this.candidateUserService.create({
        name: googleUser.displayName,
        email: googleUser.email,
        roles: Role.Candidate,
        provider: AuthProviderType.google,
        providerId: googleUser.id,
        activated: true,
      });
      return newCandidate;
    }

    if (candidate) {
      return candidate;
    }

    return null;
  }

  async sendRecoverPasswordEmail(email: string): Promise<void> {
    const candidate = await this.candidateUserService.findByEmail(email);

    if (!candidate) {
      throw new NotFoundError('There is no user registered with this email');
    }

    const token = this.temporaryToken.getToken();

    const expiresAt = this.temporaryToken.getExpirationDate();

    await this.candidateUserService.update(candidate.id, {
      recoverToken: token,
      recoverTokenExpiresAt: expiresAt,
    });

    await this.mailService.sendPasswordRecover(candidate, token);
  }

  async resetPassword(id: number, recoverPassword: RecoverPasswordDto) {
    await this.candidateUserService.findByIdAndToken(
      id,
      recoverPassword.recoverToken,
    );

    const pwdHashed = await bcrypt.hash(recoverPassword.password, SALT_BCRYPT);

    await this.candidateUserService.update(id, {
      password: pwdHashed,
      recoverToken: null,
      recoverTokenExpiresAt: null,
      updatedAt: new Date(),
    });
  }
}
