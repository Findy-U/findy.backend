import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSurveyNeedsDto {
  candidateUserId?: number;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo onde o usuário vai informar sua situação profissional atual.',
    example: [
      'Conexões com profissionais da área',
      'Networking e eventos da área',
    ],
  })
  @IsString({ each: true })
  @IsNotEmpty()
  findyHelp: string[];

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo onde o usuário deverá informar sua área de atuação profissional',
    example: ['Falta de experiência prática', 'Falta de networking'],
  })
  @IsNotEmpty()
  @IsString({ each: true })
  principalDifficulties: string[];

  createdAt?: Date;
}
