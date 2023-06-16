import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 10 })
  professionalAchievement: number;
  @ApiProperty({ example: 'Realização profissional' })
  motivation: string;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 10 })
  professionalAchievement: number;
  @ApiProperty({ example: 'Realização profissional' })
  motivation: string;
  @ApiProperty({ example: '01/01/2001' })
  createdAt: string;
}

export class ConflictExceptionError {
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({
    example: 'This candidate user already has registered your answers',
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
  @ApiProperty({ example: 'Unauthorized user' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiCreatedResponseCreate = {
  description:
    'Endpoint responsável por criar novo registropara análise de sentimentos',
  type: CreatesuccessResponse,
};

export const ApiConflictResponseCreate = {
  description: "Candidate user doesn't exist",
  type: ConflictExceptionError,
};

export const ApiResponseFindAll = {
  status: 200,
  description:
    'Endpoint que retorna as respostas de todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseFindById = {
  status: 200,
  description:
    'Endpoint que retorna as respostas de um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiParamFindById = {
  name: 'id',
  required: true,
  description:
    'Um número inteiro para o id do registro das respostas para análise de sentimentos',
  schema: { oneOf: [{ type: 'integer' }] },
};
