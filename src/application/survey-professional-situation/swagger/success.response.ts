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

export class UnauthorizedExceptionError {
  @ApiProperty({ example: 401 })
  statusCode: number;
  @ApiProperty({ example: 'Unauthorized user' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

// Informações que vão nos decorators do Swagger no controller
export const ApiProfessionalSituationCreatedResponseCreate = {
  description:
    'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
  type: CreateSurveyProfessionalSituationResponse,
};
