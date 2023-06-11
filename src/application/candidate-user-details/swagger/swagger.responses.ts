import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessResponse {
  @ApiProperty({ example: 1 })
  detailsId: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 'Female' })
  gender: string;
  @ApiProperty({ example: '01/01/2001' })
  birthDate: string;
  @ApiProperty({ example: 'Rio de Janeiro' })
  residencePlace: string;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  detailsId: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 'Female' })
  gender: string;
  @ApiProperty({ example: '01/01/2001' })
  birthDate: string;
  @ApiProperty({ example: 'Rio de Janeiro' })
  residencePlace: string;
  @ApiProperty()
  createdAt: string | null;
  @ApiProperty()
  updatedAt: string | null;
}

export class UpdateDTOSwagger {
  @ApiProperty({ example: 'Female' })
  gender: string;
}

export class UpdateResponse {
  @ApiProperty({ example: 'Updated successfully' })
  message: string;
  @ApiProperty({ example: 1 })
  detailsId: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 'Female' })
  gender: string;
  @ApiProperty({ example: '01/01/2001' })
  birthDate: string;
  @ApiProperty({ example: 'Rio de Janeiro' })
  residencePlace: string;
  @ApiProperty()
  createdAt: string | null;
  @ApiProperty()
  updatedAt: string | null;
}

export class ConflictExceptionError {
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({
    example: 'This candidate user already has registered details',
  })
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
  @ApiProperty({ example: 'Unauthorized user details' })
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
