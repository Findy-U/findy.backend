import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCandidateProjectDto {
  @ApiProperty({ example: 'Proffy' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
  })
  @IsNotEmpty()
  @IsString()
  projectScope: string;

  @ApiProperty({ example: '119545644852' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description:
      'Este campo recebe um array com IDs das linguagens/ferramentas',
    example: [1, 2, 4, 6, 7],
  })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  language?: number[];

  @ApiProperty({
    description: 'Este campo recebe um array com IDs dos cargos/proficionais',
    example: [4, 6, 7, 8],
  })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  professional?: number[];

  isActive?: boolean;
}
