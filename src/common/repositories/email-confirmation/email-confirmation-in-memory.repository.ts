import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class EmailConfirmationInMemory {
  public users = [
    {
      email: 'joao@gmail.com',
      password: 'senhaJoao123',
      token: randomUUID(),
    },
    {
      email: 'jorge@gmail.com',
      password: 'senhaJorge123',
      token: randomUUID(),
    },
    {
      email: 'ana@gmail.com',
      password: 'senhaAna123',
      token: randomUUID(),
    },
    {
      email: 'Felipe@gmail.com',
      password: 'senhaFelipe123',
      token: randomUUID(),
    },
  ];

  private user: any;

  async findRegister(token: string) {
    this.user = await this.users.find((user) => user.token === token);
    if (!this.user) {
      console.log('Usuário não encontrado');
    }
    console.log(this.users);
    return this.user;
  }

  async linkGenerate(email: string) {
    const userConfirmated = await this.users.find(
      (user) => user.email === email,
    );
    if (!userConfirmated) {
      throw new Error('Usuário não encontrado');
    }
    const link = `http://localhost:3001/api/candidate-user/confirm?token=${userConfirmated.token}`;
    return link;
  }

  async confirmRegistration(token: string): Promise<string> {
    const userConfirmated = await this.findRegister(token);
    if (!userConfirmated) {
      console.log('Token inválido');
    }
    console.log(userConfirmated);
    userConfirmated.active = true;
    return `Usuário confirmado: ${JSON.stringify(userConfirmated)}`;
  }
}
