import { Injectable } from '@nestjs/common';
import { CreateCadidateUserDto } from '../../../application/cadidate-user/dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from '../../../application/cadidate-user/dto/update-cadidate-user.dto';
import { CadidateUser } from '../../../application/cadidate-user/entities/cadidate-user.entity';
import { CandidateUserRepository } from '../../../application/cadidate-user/repositories/candidate-user.repository';

@Injectable()
export class CandidateUserInMemoryRepository
  implements CandidateUserRepository
{
  private candidate: CadidateUser[] = [
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
  ];

  async create(user: CreateCadidateUserDto): Promise<CadidateUser> {
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
  async findByEmail(email: string): Promise<CadidateUser> {
    return new Promise((resolve) =>
      resolve(this.candidate.find((user) => user.email === email)),
    );
  }

  async findById(id: number): Promise<CadidateUser> {
    return new Promise((resolve) =>
      resolve(this.candidate.find((user) => user.id === id)),
    );
  }

  async findAll(): Promise<CadidateUser[]> {
    return new Promise((resolve) => resolve(this.candidate));
  }

  update(id: number, cadidate: UpdateCadidateUserDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
