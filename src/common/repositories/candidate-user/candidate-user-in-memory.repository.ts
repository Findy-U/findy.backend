import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/cadidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';

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
      role: 'project',
      provider: null,
      providerId: null,
    },
    {
      id: 2,
      name: 'Emerson Moreira',
      email: 'eemr033@gmail.com',
      password: null,
      role: 'candidate',
      provider: 'google',
      providerId: '109937089733594757055',
    },
    {
      id: 3,
      name: 'Emerson Moreira',
      email: 'eemr3@yahoo.com.br',
      password: null,
      role: 'candidate',
      provider: 'findy',
      providerId: null,
    },
  ];

  async create(user: CreateCandidateUserDto): Promise<CandidateUser> {
    console.log('repositorio em memo', user);

    this.candidate.push({
      id: this.candidate.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
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

  update(id: number, cadidate: UpdateCandidateUserDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
