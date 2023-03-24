import { Injectable } from '@nestjs/common';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';

@Injectable()
export class CandidateProfileService {
  create(createCandidateProfileDto: CreateCandidateProfileDto) {
    return 'This action adds a new candidateProfile';
  }

  findAll() {
    return `This action returns all candidateProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidateProfile`;
  }

  update(id: number, updateCandidateProfileDto: UpdateCandidateProfileDto) {
    return `This action updates a #${id} candidateProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidateProfile`;
  }
}
