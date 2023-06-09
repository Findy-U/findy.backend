import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Injectable()
export class CandidateUserDetailsService {
  constructor(
    private readonly candidateRepository: CandidateUserDetailsRepository,
  ) {}

  async create(details: CreateCandidateUserDetailsDto) {
    const addDetails = await this.candidateRepository.create(details);
    return this.candidateRepository.create(addDetails);
  }

  async findAll() {
    const details = await this.candidateRepository.findAll();

    return details;
  }

  async findOne(id: number) {
    const candidateDetails = await this.candidateRepository.findById(id);
    if (!candidateDetails) {
      throw new NotFoundError('Candidate not found');
    }

    return this.candidateRepository.findById(candidateDetails);
  }

  async update(
    id: number,
    updateCandidateUserDetailsDto: UpdateCandidateUserDetailsDto,
  ) {
    await this.findOne(id);
    await this.candidateRepository.update(id, updateCandidateUserDetailsDto);
  }
}
