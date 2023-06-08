import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CandidateUserDetailsSerialize } from 'src/common/serializers/candidate-user-details.serialize';

@Injectable()
export class CandidateUserDetailsService {
  constructor(
    private readonly candidateRepository: CandidateUserDetailsRepository,
    private readonly candidateUserDetailsSerialize: CandidateUserDetailsSerialize,
  ) {}

  async create(details: CreateCandidateUserDetailsDto) {
    const exists = await this.candidateRepository.findById(
      details.candidateUserId,
    );

    if (!exists) {
      throw new Error("Candidate user doesn't exist");
    }

    const addDetails = await this.candidateRepository.create(details);
    return this.candidateUserDetailsSerialize.dbToResponseCreate(addDetails);
  }

  async findAll() {
    const details = await this.candidateRepository.findAll();

    return details.map((candidate) =>
      this.candidateUserDetailsSerialize.dbToResponse(candidate),
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
    await this.candidateRepository.update(id, updateCandidateUserDetailsDto);
  }
}
