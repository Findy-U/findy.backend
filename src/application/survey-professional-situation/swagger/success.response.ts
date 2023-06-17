import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyProfessionalSituationResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Empregado em tempo integral na área de tecnologia' })
  situation: string;

  @ApiProperty({
    example: 'Engenharia de Software',
  })
  ocupationArea: string;

  @ApiProperty({
    example: 'Consolidar os conhecimentos dentro da minha área',
  })
  objectives: string;

  @ApiProperty({ example: 4 })
  candidateUserId: number;

  @ApiProperty()
  createdAt: Date;
}

export class ProfessionalSituationResponseFind {
  @ApiProperty({ example: 1 })
  id: number;
}

export class ProfessionalSituationConflictExceptionError {
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({
    example: 'User already has a survey',
  })
  message: string;
  @ApiProperty({ example: 'Conflict' })
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
export const ApiProfessionalSituationCreatedResponseCreate = {
  description:
    'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
  type: CreateSurveyProfessionalSituationResponse,
};

export const ApiProfessionalSituationConflictResponseCreate = {
  description: 'Username already exists',
  type: ProfessionalSituationConflictExceptionError,
};
