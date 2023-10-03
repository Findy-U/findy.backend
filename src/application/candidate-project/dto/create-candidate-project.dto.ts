import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCandidateProjectDto {
  @ApiProperty({ example: 'Proffy' })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  projectName: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com o um breve descrição do projeto.',
    example: 'Uma breve descrição do projeto',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  shortDescription: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com a descrição completa do projeto.',
    example:
      'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço, etc..',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  detailedDescription: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com o tema do projeto (ex: educação, saúde, etc..)',
    example: 'Educação',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  projectTheme: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com a duração esperada do projeto.',
    example: '2 meses',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  expectedDuration: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com a data de início do projeto.',
    example: '2023-01-01',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  startDate: Date;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com informções sobre o tempo de dedicação esperado do candidato.',
    example:
      '6 horas por semana pelo memos. Reunião as tercas-feiras as 19h obrigatória.',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  commitmentTime: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com a url do formulário para que os candidatos possam se inscrever',
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
    example: 'email@mail.com',
  })
  @IsOptional()
  @IsString()
  responsibleEmail?: string;

  @ApiProperty({
    description:
      'Campo destinado ao prenchimento com o número de vagas disponíveis para o projeto',
    example: 7,
  })
  @IsOptional()
  @IsNumber()
  teamSize?: number;

  @ApiProperty({
    description:
      'Este campo recebe um array de objetos com "type" e "title" das linguagens/ferramentas. Campo obrigatório',
    example: [
      { type: 'LANGUAGES', title: 'JavaScript' },
      { type: 'LANGUAGES', title: 'TypeScript' },
      { type: 'DATABASE', title: 'PostgreSQL' },
      { type: 'FRAMEWORKS', title: 'ReactJS' },
      { type: 'DESIGNER', title: 'Figma' },
    ],
  })
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  languages?: languageAndTools[];

  @ApiProperty({
    description:
      'Este campo recebe um array de objeto com "type" e "title" nomes dos cargos/proficionais. Campo obrigatório',
    example: [
      { type: 'DEVELOPER', title: 'Desenvolvedor Front-end', quantity: 2 },
      { type: 'DESIGNER', title: 'Designer UX', quantity: 1 },
      { type: 'PRODUCT', title: 'Product Owner', quantity: 1 },
      { type: 'QAROLE', title: 'QA', quantity: 1 },
    ],
  })
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  professionals?: PositionsRoles[];

  isActive?: boolean;
}

class PositionsRoles {
  type: string;
  title: string;
  quantity?: number;
}

class languageAndTools {
  type: string;
  title: string;
}
