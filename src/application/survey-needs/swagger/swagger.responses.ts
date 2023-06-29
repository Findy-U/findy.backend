import { ApiProperty } from '@nestjs/swagger';

export class CreateNeedsSuccessResponse {
  @ApiProperty({ example: 1 })
  detailsId: number;

  @ApiProperty({ example: 2 })
  candidateUserId: number;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  candidateUserId: number;

  @ApiProperty({ example: 'Desempregado' })
  professionalSituation: string;

  @ApiProperty({ example: 'Tecnologia' })
  professionalArea: string;

  @ApiProperty({ example: 'Conseguir um emprego' })
  goal: string;

  @ApiProperty({ example: '01/01/2001' })
  createdAt: string;
}
export class NotFoundExceptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Candidate user not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiCreatedNeedsResponseCreate = {
  description:
    'Endpoint responsável por criar novo registro para identificação das necessidades',
  type: CreateNeedsSuccessResponse,
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
    'Um número inteiro para o id do registro das respostas para identificação das necessidades',
  schema: { oneOf: [{ type: 'integer' }] },
};
