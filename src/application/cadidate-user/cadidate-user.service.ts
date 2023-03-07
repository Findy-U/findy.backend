import { Injectable } from '@nestjs/common';
import { CreateCadidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from './dto/update-cadidate-user.dto';

@Injectable()
export class CadidateUserService {
  create(createCadidateUserDto: CreateCadidateUserDto) {
    return 'This action adds a new cadidateUser';
  }

  findAll() {
    return `This action returns all cadidateUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cadidateUser`;
  }

  update(id: number, updateCadidateUserDto: UpdateCadidateUserDto) {
    return `This action updates a #${id} cadidateUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadidateUser`;
  }
}
