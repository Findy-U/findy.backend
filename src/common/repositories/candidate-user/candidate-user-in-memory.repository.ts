import { Injectable } from '@nestjs/common';
import { CandidateUserInterface } from '../../interfaces/candidate-user.interface';

@Injectable()
export class CandidateUserInMemoryRepository {
  private candidate: CandidateUserInterface[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john-doe@test.com',
      password: '$2a$10$mpmbmG48E5LVEkVIhLBhsObvYxQyWTwrE6qZC44FurbjecCw0gA3G', //Ab123@7&
      role: 'project',
      provider: null,
      providerId: null,
      active: false
    },
    {
      id: 2,
      name: 'Emerson Moreira',
      email: 'eemr033@gmail.com',
      password: null,
      role: 'candidate',
      provider: 'google',
      providerId: '109937089733594757055',
      active: false
    },
  ];

  async create(user: CandidateUserInterface) {
    this.candidate.push({
      id: this.candidate.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      provider: user.provider,
      providerId: user.providerId,
      active: user.active
    });

    return this.findByEmail(user.email);
  }

  async findByEmail(email: string) {
    return this.candidate.find((user) => user.email === email);
  }

  async findById(id: string) {
    return this.candidate.find((user) => user.providerId === id);
  }
}
