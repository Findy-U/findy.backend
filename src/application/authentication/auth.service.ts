import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from '../../common/exceptions/unauthorized.error';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserSerialize } from '../../common/serializers/cadidate-user.serialize';
@Injectable()
export class AuthService {
  constructor(
    private readonly candidateRepository: CandidateUserInMemoryRepository,
  ) {}

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
