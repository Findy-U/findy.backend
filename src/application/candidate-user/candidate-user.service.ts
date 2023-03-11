import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-candidate-user.dto';

@Injectable()
export class CandidateUserService {
  create() {
    return 'This action adds a new candidateUser';
  }

  findAll() {
    return `This action returns all candidateUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidateUser`;
  }

  update(id: number) {
    return `This action updates a #${id} candidateUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidateUser`;
  }
}
