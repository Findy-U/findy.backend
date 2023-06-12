import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CandidateUserDetailsSerialize } from '../../common/serializers/candidate-user-details.serialize';

@Injectable()
export class CandidateUserDetailsService {
  constructor(
    private readonly candidateRepository: CandidateUserDetailsRepository,
    private readonly candidateUserDetailsSerialize: CandidateUserDetailsSerialize,
  ) {}

  async create(details: CreateCandidateUserDetailsDto) {
    const candidateUserId = await this.candidateRepository.findUnique(
      details.candidateUserId,
    );
    if (candidateUserId) {
      throw new Error('this user already has registered details');
    }
    const userDetails = await this.candidateRepository.create(details);
    return this.candidateUserDetailsSerialize.dbToResponseCreate(userDetails);
  }

  async findAll() {
    const details = await this.candidateRepository.findAll();

    return details.map((details) =>
      this.candidateUserDetailsSerialize.dbToResponse(details),
    );
  }

  async findOne(id: number) {
    const candidateDetails = await this.candidateRepository.findById(id);
    if (!candidateDetails) {
      throw new NotFoundError('Candidate not found');
    }

    return this.candidateUserDetailsSerialize.dbToResponse(candidateDetails);
  }

  async update(
    id: number,
    updateCandidateUserDetailsDto: UpdateCandidateUserDetailsDto,
  ) {
    await this.findOne(id);
    const candidateDetails = await this.candidateRepository.update(
      id,
      updateCandidateUserDetailsDto,
    );
    return this.candidateUserDetailsSerialize.dbToResponseUpdate(
      candidateDetails,
    );
  }
}
