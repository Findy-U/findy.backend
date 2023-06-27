import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessSurveyFeelingsResponse {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 10 })
  professionalAchievement: number;
  @ApiProperty({ example: 'Retorno financeiro' })
  motivation: string;
}

export class ResponseFind {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  candidateUserId: number;
  @ApiProperty({ example: 10 })
  professionalAchievement: number;
  @ApiProperty({ example: 'Retorno financeiro' })
  motivation: string;
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
  type: CreatesuccessSurveyFeelingsResponse,
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
