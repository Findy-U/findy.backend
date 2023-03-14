import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { SALT_BCRYPT } from '../../common/constants/constants';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { UnauthorizedError } from '../../common/exceptions/unauthorized.error';
import { CandidateUserInterface } from '../../common/interfaces/candidate-user.interface';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { MailService } from '../../mails/mail.service';
import { AuthProviderType } from '../../models/auth-provider.enum';
import { UserPayload } from '../../models/candidate-user-payload';
import { GoogleUser } from '../../models/google-user';
import { Role } from '../../models/roles.enum';
import { CandidateUserService } from '../candidate-user/candidate-user.service';
import { RecoverPasswordDto } from '../candidate-user/dto/recover-password.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly candidateUserService: CandidateUserService,
    private readonly candidateUserSerialize: CandidateUserSerialize,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async login(user: CandidateUserInterface) {
    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateLocalAuth(email: string, password: string) {
    const candidate = await this.candidateUserService.findByEmail(email);
    if (candidate) {
      const isPasswordValid = await bcrypt.compare(
        password,
        candidate.password,
      );
      if (isPasswordValid) {
        return this.candidateUserSerialize.requestToDb(candidate);
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

    const token = randomBytes(32).toString('hex');

    await this.candidateUserService.update(candidate.id, {
      recoverToken: token,
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
      updatedAt: new Date(),
    });
  }
}
