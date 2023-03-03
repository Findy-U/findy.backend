import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from '../../common/exceptions/unauthorized.error';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserSerialize } from '../../common/serializers/cadidate-user.serialize';
import { CandidateUser } from '../../models/auth-request';
import { UserPayload } from '../../models/candidate-user-payload';
@Injectable()
export class AuthService {
  constructor(
    private readonly candidateRepository: CandidateUserInMemoryRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: CandidateUser) {
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

  async validateUser(email: string, password: string) {
    const candidate = await this.candidateRepository.findByEmail(email);
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
}
