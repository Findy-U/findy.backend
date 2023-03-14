import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT_BCRYPT } from '../../common/constants/constants';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { AuthProviderType } from '../../models/auth-provider.enum';
import { Role } from '../../models/roles.enum';
import { CreateCandidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Injectable()
export class CandidateUserService {
  constructor(
    private readonly candidateRepository: CandidateUserRepository,
    private readonly candidateUserSerialize: CandidateUserSerialize,
  ) {}

  async create(createCandidate: CreateCandidateUserDto) {
    const cadidateExists = await this.findByEmail(createCandidate.email);

    if (cadidateExists && !createCandidate.provider)
      throw new Error('Candidate user already exists');

    let pwdHashed = '';
    if (createCandidate.password) {
      pwdHashed = await bcrypt.hash(createCandidate.password, SALT_BCRYPT);
    }
    const data = this.candidateUserSerialize.requestToDb({
      ...createCandidate,
      password: pwdHashed,
      roles: Role.Candidate,
      provider: createCandidate.provider
        ? createCandidate.provider
        : AuthProviderType.findy,
      providerId: createCandidate.providerId
        ? createCandidate.providerId
        : null,
    });
    const newCandidate = await this.candidateRepository.create(data);
    return this.candidateUserSerialize.dbToResponseCreate(newCandidate);
  }

  async findAll() {
    const candidates = await this.candidateRepository.findAll();
    return candidates.map((candidate) =>
      this.candidateUserSerialize.dbToResponse(candidate),
    );
  }

  async findOne(id: number) {
    const candidate = await this.candidateRepository.findById(id);
    if (!candidate) {
      throw new NotFoundError('Candidate not found');
    }
    return this.candidateUserSerialize.dbToResponse(candidate);
  }

  async findByEmail(email: string) {
    return await this.candidateRepository.findByEmail(email);
  }

  async update(id: number, updateCandidateUserDto: UpdateCandidateUserDto) {
    await this.findOne(id);

    await this.candidateRepository.update(id, updateCandidateUserDto);
  }

  async findByIdAndToken(id: number, token: string) {
    const candidate = await this.candidateRepository.findById(id);

    if (!candidate) {
      throw new Error('Candidate not found');
    }

    if (token !== candidate.recoverToken) {
      throw new Error('Candidate not found');
    }

    return candidate;
  }
}
