import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessDetailsResponse {
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
  @ApiProperty({ example: 'Rio de Janeiro' })
  state: string;
  @ApiProperty({ example: 'Brazil' })
  country: string;
}

export class ResponseDetailsFind {
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
  @ApiProperty({ example: 'Rio de Janeiro' })
  state: string;
  @ApiProperty({ example: 'Brazil' })
  country: string;
  @ApiProperty({ example: '01/01/2001' })
  createdAt: string;
  @ApiProperty({ example: '01/01/2001' })
  updatedAt: string | null;
}

export class UpdateDetailsDTOSwagger {
  @ApiProperty({ example: 'Female' })
  gender: string;
}

export class UpdateDetailsResponse {
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
  @ApiProperty({ example: 'Rio de Janeiro' })
  state: string;
  @ApiProperty({ example: 'Brazil' })
  country: string;
  @ApiProperty({ example: '01/01/2001' })
  createdAt: string;
  @ApiProperty({ example: '01/01/2001' })
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
  @ApiProperty({ example: 'Unauthorized user' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiCreatedDetailsResponseCreate = {
  description:
    'Endpoint responsável por criar novo registro de detalhes do usuário.',
  type: CreatesuccessDetailsResponse,
};

export const ApiResponseDetailsFindAll = {
  status: 200,
  description:
    'Endpoint que retorna os detalhes de todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseDetailsFindById = {
  status: 200,
  description:
    'Endpoint que retorna os detalhes de um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApiParamDetailsFindById = {
  name: 'id',
  required: true,
  description:
    'Um número inteiro para o id do registro de detalhes do usuário candidato',
  schema: { oneOf: [{ type: 'integer' }] },
};

export const ApiResponseDetailsUpdate = {
  status: 200,
  description:
    'Endpoint usando para editar os detalhes do usuário candidato. Precisa estar autenticado com o token JWT',
};
