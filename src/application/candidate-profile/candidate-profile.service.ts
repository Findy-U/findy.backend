import { Injectable } from '@nestjs/common';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';
import { CandidateProfile } from './entities/candidate-profile.entity';
import { CandidateProfileRepository } from './repository/candidate-profile.repository';

@Injectable()
export class CandidateProfileService {
  private candidate: CandidateProfile;
  constructor(
    private readonly candidateUserRepository: CandidateProfileRepository,
  ) {}

  async create(
    createCandidateProfileDto: CreateCandidateProfileDto,
  ): Promise<CandidateProfile> {
    return await this.candidateUserRepository.create(createCandidateProfileDto);
  }

  async findAll(): Promise<CandidateProfile[]> {
    return await this.candidateUserRepository.findAll();
  }

  async findOne(id: number): Promise<CandidateProfile> {
    this.candidate = await this.candidateUserRepository.findById(id);
    if (!this.candidate) {
      throw new NotFoundError('Profile not found');
    }
    return this.candidate;
  }

  async update(
    id: number,
    updateCandidateProfileDto: UpdateCandidateProfileDto,
  ) {
    return `This action updates a #${id} candidateProfile`;
  }

  async remove(id: number) {
    await this.candidateUserRepository.remove(id);
  }
}
