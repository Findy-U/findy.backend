import { Injectable } from '@nestjs/common';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

@Injectable()
export class CandidateUserService {
  constructor(
    private readonly candidateRepository: CandidateUserRepository,
    private readonly candidateUserSerialize: CandidateUserSerialize,
  ) {}

  async create(createCandidate: CreateCandidateUserDto) {
    const cadidateExists = await this.findByEmail(createCandidate.email);

    if (cadidateExists && !createCandidate.provider) {
      throw new Error('Candidate user already exists');
    }

    const newCandidate = await this.candidateRepository.create(createCandidate);
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
      throw new Error('Recover token not found');
    }

    return candidate;
  }
}
