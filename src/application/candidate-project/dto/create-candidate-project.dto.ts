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
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  projectScope: string;

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  urlTeamSelection: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com o nome do responsável pelo projeto (dono/usuário que criou)',
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  responsible?: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com o contado do responsável pelo projeto (dono/usuário que criou)',
    example: '99999999999',
  })
  @IsOptional()
  @IsString()
  contactResponsible?: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com link do linkedin do responsável pelo projeto (dono/usuário que criou)',
    example: 'https://www.linkedin.com/in/johndoe',
  })
  @IsOptional()
  @IsString()
  urlLinkediResponsible?: string;

  @ApiProperty({
    description:
      'Este campo recebe uma string com os nomes do(s) lider(es) e seu(s) contato(s)',
    example:
      'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
  })
  @ApiProperty({
    description:
      'Este campo recebe um array com IDs das linguagens/ferramentas. Campo obrigatório',
    example: [1, 2, 4, 6, 7],
  })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  language?: number[];

  @ApiProperty({
    description:
      'Este campo recebe um array com nomes dos cargos/proficionais. Campo obrigatório',
    example: ['Front-End', 'Back-End', 'QA', 'Product Manager', 'UX', 'UI'],
  })
  @ArrayNotEmpty()
  @IsString({ each: true })
  professional?: string[];

  @ApiProperty({
    description:
      'Este campo recebe um array com nomes de outros cargos/proficionais',
    example: ['Tech Lead', 'Product Owner'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  others?: string[];

  @ApiProperty({
    example:
      'Descreva como a Sou Junior pode apoiar seu projeto. Campo opcional',
  })
  findyHelp?: string;

  isActive?: boolean;

  // update
  projectStacks?: any;
  projectRoles?: any;
}
