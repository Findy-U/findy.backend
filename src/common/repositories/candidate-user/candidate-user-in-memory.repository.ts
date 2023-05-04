import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { Role } from '../../../models/roles.enum';

@Injectable()
export class CandidateUserInMemoryRepository
  implements CandidateUserRepository
{
  private candidate: CandidateUser[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john-doe@test.com',
      password: '$2b$10$raAwBs3zgyoQNOkEy9fWvuuTNW/7XqQAw2OZZPzQFTHPaAbiU52WG', //e@N4525&%abX
      roles: 'project',
      provider: null,
      providerId: null,
      recoverToken: null,
    },
    {
      id: 2,
      name: 'Emerson Moreira',
      email: 'eemr033@gmail.com',
      password: null,
      roles: 'candidate',
      provider: 'google',
      providerId: '109937089733594757055',
      recoverToken: null,
    },
    {
      id: 3,
      name: 'Emerson Moreira',
      email: 'eemr3@yahoo.com.br',
      password: null,
      roles: 'candidate',
      provider: 'findy',
      providerId: null,
      recoverToken: 'any_recover_token',
    },
  ];

  async create(user: CreateCandidateUserDto): Promise<CandidateUser> {
    if (!user.name || !user.email || !user.password) {
      throw new Error('Invalid data');
    }

    this.candidate.push({
      id: this.candidate.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      roles: Role.Candidate,
      provider: user.provider,
      providerId: user.providerId,
    });

    return this.findByEmail(user.email);
  }

  async findByEmail(email: string): Promise<CandidateUser> {
    return new Promise((resolve) =>
      resolve(this.candidate.find((user) => user.email === email)),
    );
  }

  async findById(id: number): Promise<CandidateUser> {
    return new Promise((resolve) =>
      resolve(this.candidate.find((user) => user.id === id)),
    );
  }

  async findAll(): Promise<CandidateUser[]> {
    return new Promise((resolve) => resolve(this.candidate));
  }

  update(id: number, cadidate: UpdateCandidateUserDto): Promise<CandidateUser> {
    throw new Error('Method not implemented.');
  }

  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
