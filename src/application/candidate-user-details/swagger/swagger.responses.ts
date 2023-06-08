import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'Female' })
  gender: string;
  @ApiProperty({ example: '01/01/2001' })
  birthDate: Date;
  @ApiProperty({ example: 'Rio de Janeiro' })
  residencePlace: string;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'Female' })
  gender: string;
  @ApiProperty({ example: '01/01/2001' })
  birthDate: Date;
  @ApiProperty({ example: 'Rio de Janeiro' })
  residencePlace: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

export class UpdateDTOSwagger {
  @ApiProperty({ example: 'Female' })
  gender: string;
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
export class UnauthorizedExceptionError {
  @ApiProperty({ example: 401 })
  statusCode: number;
  @ApiProperty({ example: 'Unauthorized user' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiCreatedResponseCreate = {
  description:
    'Endpoint responsável por criar novo registro de detalhes do usuário.',
  type: CreatesuccessResponse,
};

export const ApiConflictResponseCreate = {
  description: "Candidate user doesn't exist",
  type: ConflictExceptionError,
};

export const ApiResponseFindAll = {
  status: 200,
  description:
    'Endpoint que retorna os detalhes de todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseFindById = {
  status: 200,
  description:
    'Endpoint que retorna os detalhes de um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiParamFindById = {
  name: 'id',
  required: true,
  description:
    'Um número inteiro para o id do registro de detalhes do usuário candidato',
  schema: { oneOf: [{ type: 'integer' }] },
};

export const ApiResponseUpdate = {
  status: 200,
  description:
    'Endpoint usando para editar os detalhes do usuário candidato. Precisa estar autenticado com o token JWT',
};
