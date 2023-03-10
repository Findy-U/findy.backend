import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from '../../common/exceptions/unauthorized.error';
import { CandidateUserInterface } from '../../common/interfaces/candidate-user.interface';
import { CandidateUserSerialize } from '../../common/serializers/cadidate-user.serialize';
import { AuthProviderType } from '../../models/auth-provider.enum';
import { UserPayload } from '../../models/candidate-user-payload';
import { GoogleUser } from '../../models/google-user';
import { Role } from '../../models/role.enum';
import { CandidateUserService } from '../cadidate-user/cadidate-user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly cadidateUserService: CandidateUserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: CandidateUserInterface) {
    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateLocalAuth(email: string, password: string) {
    const candidate = await this.cadidateUserService.findByEmail(email);
    if (candidate) {
      const isPasswordValid = await bcrypt.compare(
        password,
        candidate.password,
      );
      if (isPasswordValid) {
        return new CandidateUserSerialize().requestToDb(candidate);
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }

  async validateGoogleAuth(googleUser: GoogleUser) {
    const user = await this.cadidateUserService.findByEmail(googleUser.email);
    if (!user) {
      const newUser = await this.cadidateUserService.create({
        name: googleUser.displayName,
        email: googleUser.email,
        role: Role.Candidate,
        provider: AuthProviderType.google,
        providerId: googleUser.id,
      });
      return newUser;
    }

    if (user) {
      return user;
    }

    return null;
  }
}
