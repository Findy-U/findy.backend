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

  @ApiProperty({ example: '119985643582' })
  phone: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({ example: false })
  isActive: boolean;
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

  @ApiProperty({ example: '119985643582' })
  phone: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({ example: false })
  isActive: boolean;

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

export class UpdateDTOSwagger {
  @ApiProperty({ example: 'Naruto Uzumaki' })
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
  @ApiProperty({ example: 'Candidate user not found' })
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
  description: 'Um número inteiro para o id do usuário candidato',
  schema: { oneOf: [{ type: 'integer' }] },
  example: 'candidate-users/1',
};

export const ApiResponseUpdate = {
  status: 200,
  description:
    'Endpoint usando para editar o perfil do usuário candidato. Precisa estar autenticado com o token JWT',
};
