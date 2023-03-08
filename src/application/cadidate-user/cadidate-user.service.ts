import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT_BCRYPT } from '../../common/constants/constants';
import { CandidateUserSerialize } from '../../common/serializers/cadidate-user.serialize';
import { AuthProviderType } from '../../models/auth-provider.enum';
import { Role } from '../../models/role.enum';
import { CreateCadidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from './dto/update-cadidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
@Injectable()
export class CandidateUserService {
  constructor(private readonly candidateRepository: CandidateUserRepository) {}

  async create(createUser: CreateCadidateUserDto) {
    const cadidateExists = await this.findByEmail(createUser.email);

    if (cadidateExists && !createUser.provider)
      throw new Error('Candidate user already exists');

    let pwdHashed = '';
    if (createUser.password) {
      pwdHashed = await bcrypt.hash(createUser.password, SALT_BCRYPT);
    }
    const data = new CandidateUserSerialize().requestToDb({
      ...createUser,
      role: Role.Candidate,
      provider: createUser.provider
        ? createUser.provider
        : AuthProviderType.findy,
      providerId: createUser.providerId ? createUser.providerId : null,
      password: pwdHashed,
    });

    return await this.candidateRepository.create(data);
  }

  async findAll() {
    return await this.candidateRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} cadidateUser`;
  }

  async findByEmail(email: string) {
    return await this.candidateRepository.findByEmail(email);
  }

  update(id: number, updateCadidateUserDto: UpdateCadidateUserDto) {
    return `This action updates a #${id} cadidateUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadidateUser`;
  }
}
