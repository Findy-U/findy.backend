import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyMarketInformationSuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Linkedin' })
  metFindy: string;

  @ApiProperty({
    example: 'Jonh Doe',
  })
  friendName: string;

  @ApiProperty({
    example: 'jonhdoe@email.com',
  })
  friendEmail: string;

  @ApiProperty({ example: 4 })
  candidateUserId: number;

  @ApiProperty()
  createdAt: Date;
}

export class ProfileResponseFind {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Texto da uma descrição' })
  description: string;

  @ApiProperty({
    example: 'https://www.github.com/user',
  })
  urlGithub: string;

  @ApiProperty({
    example: 'https://www.linkedin.com/in/user',
  })
  urlLinkedin: string;

  @ApiProperty({ example: '11999999999' })
  phone: string;

  @ApiProperty({
    example: 'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
  })
  availableTime: string;

  @ApiProperty({
    example: 'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
  })
  areaOfInterest: string;

  @ApiProperty({ example: 2 })
  candidateUserId: number;

  @ApiProperty({
    example: [
      {
        id: 2,
        name: 'John Doe',
        email: 'eemr3@yahoo.com.br',
        roles: 'candidate',
        provider: 'findy',
        providerId: null,
        createdAt: '2023-04-08T18:35:51.304Z',
        updatedAt: null,
        recoverToken: null,
      },
    ],
  })
  candidateUser: string[];

  @ApiProperty({
    example: [{ id: 13, title: 'Front-End', userId: 2, profileId: 4 }],
  })
  occupationArea: string[];

  @ApiProperty({
    example: [
      {
        id: 9,
        profileId: 4,
        stackId: 19,
      },
    ],
  })
  profileSkills: string[];
}

export class SurveyMarketInfoConflictExceptionError {
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({
    example: 'User already has a survey',
  })
  message: string;
  @ApiProperty({ example: 'Conflict' })
  error: string;
}

export class CandidateUserNotFoundExceptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Candidate user not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}
export class ProfileNotFoundExceptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Profile not found' })
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
export const ApiMarketInformationCreatedResponseCreate = {
  description:
    'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
  type: CreateSurveyMarketInformationSuccessResponse,
};

export const ApiMarketInformationConflictResponseCreate = {
  description: 'Username already exists',
  type: SurveyMarketInfoConflictExceptionError,
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
