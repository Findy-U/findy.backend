import { ApiProperty } from '@nestjs/swagger';

export class CreatesuccessResponse {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'John Does' })
  name: string;
  @ApiProperty({ example: 'johndoe@email.com' })
  email: string;
  @ApiProperty({ example: 'candidate' })
  roles: string;
}

export class ResponseCandidateUserFind {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'johndoe@email.com' })
  email: string;

  @ApiProperty({ example: 'candidate' })
  roles: string;

  @ApiProperty({
    example: {
      profile: {
        id: 1,
        description: 'Texto da descrição do perfil do usuário',
        urlGithub: 'https://www.github.com/usuario',
        urlLinkedin: 'https://www.linkedin.com/in/nomedousuario',
        phone: '9999999999',
        availableTime:
          'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
        areaOfInterest:
          'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
        siklls: [
          {
            id: 1,
            type: 'DESIGNER_TOOL',
            name: 'Figma',
          },
          {
            id: 2,
            type: 'DESIGNER_TOOL',
            name: 'Canva',
          },
          {
            id: 3,
            type: 'DESIGNER_TOOL',
            name: 'Sketch',
          },
        ],
        occupationArea: [
          {
            id: 1,
            title: 'UI',
          },
          {
            id: 2,
            title: 'UX',
          },
        ],
      },
    },
  })
  profile: {
    id: number;
    description: string;
    urlGithub: string;
    urlLinkedin: string;
    phone: string;
    availableTime: string;
    areaOfInterest: string;
    siklls: [
      {
        id: number;
        type: string;
        name: string;
      },
    ];
    occupationArea: [
      {
        id: number;
        title: string;
      },
    ];
  };

  @ApiProperty({ example: 'findy' })
  provider: string;

  @ApiProperty({ example: null })
  providerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class UpdateDTOSwagger {
  @ApiProperty({ example: 'Naruto Uzumaki' })
  name: string;
}

export class UpdateResponse {
  @ApiProperty({ example: 'Update successfully' })
  message: string;
}

export class ConfirmEmailResponse {
  @ApiProperty({ example: 'Email confirmed successfully' })
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
  description: 'Endpoint responsável por criar novo usuário candidato.',
  type: CreatesuccessResponse,
};

export const ApiConflictResponseCreate = {
  description: 'Username already exists',
  type: ConflictExceptionError,
};

export const ApiResponseFindAll = {
  status: 200,
  description:
    'Endpoint que retorna todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};

export const ApiResponseFindById = {
  status: 200,
  description:
    'Endpoint que retorna um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};

export const ApirParamFindById = {
  name: 'id',
  required: true,
  description: 'Um número inteiro para o id do usuário candidato',
  schema: { oneOf: [{ type: 'integer' }] },
};

export const ApiResponseUpdate = {
  status: 200,
  description:
    'Endpoint usando para editar o perfil do usuário candidato. Precisa estar autenticado com o token JWT',
};

export const ApiResponseEmailConfirmation = {
  status: 200,
  description: 'Endpoint usado para confirmação do email do usuário candidato',
};
