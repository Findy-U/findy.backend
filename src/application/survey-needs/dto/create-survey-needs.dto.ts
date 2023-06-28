import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSurveyNeedsDto {
  candidateUserId?: number;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo onde o usuário vai informar sua situação profissional atual.',
    example: 'Empregado',
  })
  @IsString()
  @IsNotEmpty()
  professionalSituation: string;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo onde o usuário deverá informar sua área de atuação profissional',
    example: 'Tecnologia',
  })
  @IsNotEmpty()
  @IsString()
  professionalArea: string;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo onde o usuário deverá informar seu objetivo junto a Findy',
    example: 'Conseguir um emprego',
  })
  @IsNotEmpty()
  @IsString()
  goal: string;

  createdAt?: Date;
}
