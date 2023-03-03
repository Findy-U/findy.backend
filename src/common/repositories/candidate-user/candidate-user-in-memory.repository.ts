import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidateUserInMemoryRepository {
  private candidate = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john-doe@test.com',
      password: '$2a$10$mpmbmG48E5LVEkVIhLBhsObvYxQyWTwrE6qZC44FurbjecCw0gA3G', //Ab123@7&
      role: 'project',
    },
  ];
  async findByEmail(email: string) {
    return this.candidate.find((user) => user.email === email);
  }
}
