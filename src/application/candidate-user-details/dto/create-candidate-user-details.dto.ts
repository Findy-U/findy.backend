import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCandidateUserDetailsDto {
  candidateUserId?: number;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do gênero do usuário candidato, a ser selecionado dentre as opções fornecidas.',
    example: 'Feminino',
  })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se da data de nascimento do usuário.',
    example: '01/01/2001',
  })
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do local de residência do usuário, a ser selecionado dentre as opções fornecidas.',
    example: 'Rio de Janeiro',
  })
  @IsString()
  @IsNotEmpty()
  residencePlace: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do estado de residência do usuário, a ser selecionado dentre as opções fornecidas.',
    example: 'Rio de Janeiro',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do país de residência do usuário, a ser selecionado dentre as opções fornecidas.',
    example: 'Brasil',
  })
  country: string;

  createdAt?: Date;
  updatedAt?: Date;
}
