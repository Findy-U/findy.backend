import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCandidateUserDetailsDto {
  @ApiProperty({ description: 'Campo numérico', example: 2 })
  @IsNumber()
  candidateUserId?: number | null;

  candidateUser?: any;

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
  birthDate: Date;

  @ApiProperty({
    description:
      'Capo é obrigatório. Trata-se do local de residência do usuário, a ser selecionado dentre as opções fornecidas.',
    example: 'Rio de Janeiro',
  })
  @IsString()
  @IsNotEmpty()
  residencePlace: string;

  createdAt?: Date;
  updatedAt?: Date;
}