import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Proffy' })
  name: string;

  @ApiProperty({
    example:
      'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
  })
  projectScope: string;

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
  })
  urlTeamSelection: string;

  @ApiProperty({
    example: 'John Doe',
  })
  responsible: string;

  @ApiProperty({ example: '119985643582' })
  contactResponsible: string;

  @ApiProperty({
    example: 'https://www.linkedin.com/in/johndoe',
  })
  urlLinkediResponsible: string;

  @ApiProperty({
    example: 'Com orientações de como montar um boa equipe',
  })
  findyHelp: string;

  @ApiProperty({
    example:
      'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
  })
  contactLeaders: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({ example: false })
  isActive: boolean;

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

  @ApiProperty({ example: 'Proffy' })
  name: string;

  @ApiProperty({
    example:
      'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
  })
  projectScope: string;

  @ApiProperty({
    example:
      'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
  })
  urlTeamSelection: string;

  @ApiProperty({ example: 'John Doe' })
  responsible: string;

  @ApiProperty({ example: '119985643582' })
  contactResponsible: string;

  @ApiProperty({ example: 'https://www.linkedin.com/in/johndoe' })
  urlLinkediResponsible: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({ example: 'Com orientações de como montar um boa equipe' })
  findyHelp: string;

  @ApiProperty({ example: false })
  isActive: boolean;

  @ApiProperty({
    example:
      'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
  })
  contactLeaders: string;

  @ApiProperty({ example: '2023-04 - 06T20: 22: 34.791Z' })
  createdAt: Date;

  @ApiProperty({ example: null })
  updatedAt: Date;

  @ApiProperty({
    example: [
      {
        id: 1,
        projectId: 1,
        stackId: 1,
      },
    ],
  })
  language: number[];

  @ApiProperty({
    example: [
      {
        id: 9,
        projectId: 3,
        rolesId: 1,
      },
    ],
  })
  professional: number[];
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
export class ConflictExceptionError {
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({ example: 'Candidate user already exists' })
  message: string;
  @ApiProperty({ example: 'Conflict' })
  error: string;
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
  type: CreatesuccessResponse,
};

export const ApiConflictResponseCreate = {
  description: 'Project name already exists',
  type: ConflictExceptionError,
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
  example: 'candidate-projects/1',
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
  example: 'candidate-projects/roles/1',
};

export const ApirParamStackFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id da linguagem/ferramenta',
  schema: { oneOf: [{ type: 'integer' }] },
  example: 'candidate-projects/skills/1',
};
