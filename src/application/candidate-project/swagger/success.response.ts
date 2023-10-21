import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessProjectsResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'E-Coleta' })
  projectName: string;

  @ApiProperty({
    example: 'Projeto destinado a cadstro de pontos de colet',
  })
  shortDescription: string;

  @ApiProperty({
    example:
      'Projeto onde comerciantes da dicade podem se cadastrar com ponto de coleta seletiva, para que o cidadão possa entregar alguns tipos de produtos que são reciclaveis ou descartaveis, e não podem ir para o lixo comum.',
  })
  detailedDescription: string;

  @ApiProperty({ example: 'Meio ambiente' })
  projectTheme: string;

  @ApiProperty({ example: '2023-10-03T00:00:00.000Z' })
  startDate: Date;

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
  })
  urlTeamSelection: string;

  @ApiProperty({ example: '5 meses' })
  expectedDuration: string;

  @ApiProperty({ example: '6 horas por semana pelo memos' })
  commitmentTime: string;

  @ApiProperty({
    example: 'John Doe',
  })
  responsible: string;

  @ApiProperty({
    example: 'jhondoe@email.com',
  })
  responsibleEmail: string;

  @ApiProperty({ example: '7' })
  teamSize: string;

  @ApiProperty({
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    example:
      'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
  })
  contactLeaders: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({
    example: '2023-04-06T20:22:34.791Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: null,
  })
  updatedAt: Date;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'johndoe@email.com' })
  email: string;

  @ApiProperty({ example: 'candidate' })
  roles: string;

  @ApiProperty({ example: 'findy' })
  provider: string;

  @ApiProperty({ example: null })
  providerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class ProjectResponseFind {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'E-Coleta' })
  projectName: string;

  @ApiProperty({
    example: 'Projeto destinado a cadstro de pontos de coleta',
  })
  shortDescription: string;

  @ApiProperty({
    example:
      'Projeto onde comerciantes da dicade podem se cadastrar com ponto de coleta seletiva, para que o cidadão possa entregar alguns tipos de produtos que são reciclaveis ou descartaveis, e não podem ir para o lixo comum.',
  })
  detailedDescription: string;

  @ApiProperty({ example: 'Meio ambiente' })
  projectTheme: string;

  @ApiProperty({ example: '2023-10-03T00:00:00.000Z' })
  startDate: Date;

  @ApiProperty({ example: '5 meses' })
  expectedDuration: string;

  @ApiProperty({ example: '6 horas por semana pelo memos' })
  commitmentTime: string;

  @ApiProperty({ example: '7' })
  teamSize: string;

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
  })
  urlTeamSelection: string;

  @ApiProperty({ example: { name: 'John Doe', email: 'johndoe@email.com' } })
  CandidateUser: {
    name: string;
    email: string;
  };

  @ApiProperty({ example: false })
  isActive: boolean;

  @ApiProperty({
    example: [
      {
        name: 'TypeScript',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'NodeJs',
      },
    ],
  })
  ProgrammingLanguages: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'React',
      },
      {
        name: 'NextJS',
      },
    ],
  })
  FrameworksLibraries: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'PostgreSQL',
      },
    ],
  })
  DataBases: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'Git',
      },
    ],
  })
  DesignerTools: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'Azure',
      },
    ],
  })
  CloudServices: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'Docker',
      },
    ],
  })
  DevOpsTools: [{ name: string }];

  @ApiProperty({
    example: [
      {
        name: 'Cypress',
      },
    ],
  })
  TestingTools: [{ name: string }];

  @ApiProperty({
    example: [
      {
        title: 'Front-end',
        quantity: 2,
      },
      {
        title: 'Back-end',
        quantity: 2,
      },
    ],
  })
  DeveloperRoles: [{ title: string; quantity: number }];

  @ApiProperty({
    example: [
      {
        title: 'UX',
        quantity: 1,
      },
      {
        title: 'UI',
        quantity: 1,
      },
    ],
  })
  DesignerRoles: [{ title: string; quantity: number }];

  @ApiProperty({
    example: {
      title: 'Product Owner',
      quantity: 1,
    },
  })
  ProductRoles: [{ title: string; quantity: number }];

  @ApiProperty({
    example: {
      title: 'QA',
      quantity: 1,
    },
  })
  QARoles: [{ title: string; quantity: number }];

  @ApiProperty({
    example: {
      title: 'Data Scientist',
      quantity: 1,
    },
  })
  DataRoles: [{ title: string; quantity: number }];

  @ApiProperty({ example: '2023-04 - 06T20: 22: 34.791Z' })
  createdAt: Date;

  @ApiProperty({ example: null })
  updatedAt: Date;
}

export class ProjectResponseDelete {
  @ApiProperty({ example: 'Successfully removed!' })
  message: string;
}
export class UpdateDTOSwagger {
  @ApiProperty({ example: 'Nome novo do Projeto' })
  name: string;
}

export class UpdateResponse {
  @ApiProperty({ example: 'Update successfully' })
  message: string;
}
export class NotFoundExceptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Project not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}

export class BadRequestExceptionError {
  @ApiProperty({ example: 400 })
  statusCode: number;
  @ApiProperty({ example: 'he ID was not informed, please inform!' })
  message: string;
  @ApiProperty({ example: 'Bad Request' })
  error: string;
}
export class UnauthorizedExceptionError {
  @ApiProperty({ example: 401 })
  statusCode: number;
  @ApiProperty({ example: 'Unauthorized user' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

export class ForbidenExceptiomError {
  @ApiProperty({ example: 403 })
  statusCode: number;
  @ApiProperty({ example: 'Forbidden resource' })
  message: string;
  @ApiProperty({ example: 'Forbidden' })
  error: string;
}

export class RolesResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Front-End' })
  title: string;
}

export class StackResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'JavaScript' })
  title: string;
}

export class NotFoundExceptionErrorRoles {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Roles not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}
export class NotFoundExceptionErrorStacks {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Skills not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiCreatedResponseCreate = {
  description:
    'Endpoint responsável por criar novo projeto pelo candidato. O ID do usuário candidato é passado automaticamente pelo token',
  type: CreatesuccessProjectsResponse,
};

export const ApiResponseFindAll = {
  status: 200,
  description:
    'Endpoint que retorna todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseFindById = {
  status: 200,
  description:
    'Endpoint que retorna um projeto conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApirParamFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id do projeto',
  schema: { oneOf: [{ type: 'integer' }] },
};

export const ApiResponseUpdate = {
  status: 200,
  description:
    'Endpoint usando para editar o perfil do projeto. Precisa estar autenticado com o token JWT',
};

export const ApiResponseDelete = {
  status: 200,
  description:
    'Endpoint que remove um conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiResponseRoles = {
  status: 200,
  description:
    'Endpoint que retorna todas profissões/cargos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseRoleById = {
  status: 200,
  description:
    'Endpoint que retorna uma profissão/cargo conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiResponseStacks = {
  status: 200,
  description:
    'Endpoint que retorna todas linguagens/ferramentas. Precisa estar autenticado com o token JWT',
};

export const ApiResponseStackById = {
  status: 200,
  description:
    'Endpoint que retorna uma linguagem/ferramenta conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApirParamRoleFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id da profissão/cargo',
  schema: { oneOf: [{ type: 'integer' }] },
};

export const ApirParamStackFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id da linguagem/ferramenta',
  schema: { oneOf: [{ type: 'integer' }] },
};
