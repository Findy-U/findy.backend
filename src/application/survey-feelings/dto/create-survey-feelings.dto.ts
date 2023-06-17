import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSurveyFeelingsDto {
  candidateUserId?: number;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de uma escala de 0 a 10, onde o usuário vai informar o quanto se sente realizado(a) profissionalmente.',
    example: '10',
  })
  @IsNumber()
  @IsNotEmpty()
  professionalAchievement: number;

  @ApiProperty({
    description:
      'Campo obrigatório. Trata-se de um campo livre onde o usuário deverá escrever o que o motiva a buscar a função atual ou desejada na área de tecnologia',
    example: 'Retorno financeiro',
  })
  @IsNotEmpty()
  @IsString()
  motivation: string;

  createdAt?: Date;
}
