import { Injectable } from '@nestjs/common';
import { CandidateUser } from '@prisma/client';
import { NotFoundError } from 'src/common/exceptions/not-found.error';
import { CandidateProfileInMemoryRepository } from 'src/common/repositories/candidate-profile/candidate-profile-in-memory.repository';
import { CandidateProfileSQLiteRepository } from 'src/common/repositories/candidate-profile/candidate-profile-sqlite-repository';
import { CandidateUserRepository } from '../candidate-user/repositories/candidate-user.repository';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';
import { CandidateProfile } from './entities/candidate-profile.entity';

@Injectable()
export class CandidateProfileService {

  constructor(
    //private readonly candidateUserRepository: CandidateUserRepository,
    private readonly candidateProfileRepository: CandidateProfileSQLiteRepository,
    private candidate: CandidateProfile
  ) { }

  create(createCandidateProfileDto: CreateCandidateProfileDto) {
    return this.candidateProfileRepository.create(createCandidateProfileDto);
  }

  findAll() {
    return this.candidateProfileRepository.findAll();
  }

  async findOne(id: number) {
    this.candidate = await this.candidateProfileRepository.findById(id);
    if (!this.candidate) {
      throw new NotFoundError('Profile not found');
    }
    return this.candidate;
  }

  update(id: number, updateCandidateProfileDto: UpdateCandidateProfileDto) {
    return `This action updates a #${id} candidateProfile`;
  }

  remove(id: number) {
    this.candidateProfileRepository.delete(id);
  }
}
