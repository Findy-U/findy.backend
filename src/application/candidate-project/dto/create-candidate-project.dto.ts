import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform',
  })
  @IsNotEmpty()
  @IsString()
  urlTeamSelection: string;

  responsible?: string;

  @ApiProperty({
    description:
      'Este campo recebe um array com IDs dos usuários que serão lideres no projeto',
    example: [1, 4, 10],
  })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  leaders: number[];

  @ApiProperty({
    description:
      'Este campo recebe um array com IDs das linguagens/ferramentas',
    example: [1, 2, 4, 6, 7],
  })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  language?: number[];

  @ApiProperty({
    description: 'Este campo recebe um array com nomes dos cargos/proficionais',
    example: ['QUALITY ASSURANCE', 'FRONT-END', 'BACK-END'],
  })
  @ArrayNotEmpty()
  @IsString({ each: true })
  professional?: string[];

  @ApiProperty({
    description:
      'Este campo recebe um array com nomes de outros cargos/proficionais',
    example: ['TECH LEAD', 'IA', 'DATA SCIENCE'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  others?: string[];

  @ApiProperty({
    example: 'Descreva como a Sou Junior pode apoiar seu projeto',
  })
  findyHelp?: string;

  isActive?: boolean;

  // update
  projectStacks?: any;
  projectRoles?: any;
}
