import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyMarketInformationSuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Linkedin' })
  metFindy: string;

  @ApiProperty({
    example: null,
  })
  friendName: string;

  @ApiProperty({
    example: null,
  })
  friendEmail: string;

  @ApiProperty({ example: 4 })
  candidateUserId: number;

  @ApiProperty()
  createdAt: Date;
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
export const ApiMarketInformationCreatedResponseCreate = {
  description:
    'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
  type: CreateSurveyMarketInformationSuccessResponse,
};

export const ApiMarketInformationResponseFindAll = {
  status: 200,
  description:
    'Endpoint que retorna todos os dados referente a "Como você ficou sabendo sobre a Findy?". Precisa estar autenticado com o token JWT',
};

export const ApiMarketInformationResponseFindById = {
  status: 200,
  description:
    'Endpoint que retorna um dado referente a "Como você ficou sabendo sobre a Findy?" conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiMarketInformationParamFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id do perfil',
  schema: { oneOf: [{ type: 'integer' }] },
};
