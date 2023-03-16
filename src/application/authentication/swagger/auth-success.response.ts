import { ApiProperty } from '@nestjs/swagger';

export class RequestBodyLogin {
  @ApiProperty({ example: 'johndoe@email.com' })
  email: string;

  @ApiProperty({ example: 'B12#&d@m' })
  password: string;
}

export class SuccessResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1lcnNvbiBNb3JpZXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIiLCJyb2xlcyI6ImNhbmRpZGF0ZSIsImlhdCI6MTY3ODkyMzY5OCwiZXhwIjoxNjc4OTI5Njk4fQ.RBpEC6HrrYN82wjRjZsD11BsQ9ZQ2yDL_E5PR6PqL_Y',
  })
  access_token: string;
}

export class SuccessGoogleResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1lcnNvbiBNb3JpZXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIiLCJyb2xlcyI6ImNhbmRpZGF0ZSIsImlhdCI6MTY3ODkyMzY5OCwiZXhwIjoxNjc4OTI5Njk4fQ.RBpEC6HrrYN82wjRjZsD11BsQ9ZQ2yDL_E5PR6PqL_Y',
  })
  message: string;
}

export class SendRecoverPasswordEmailBodyProperty {
  @ApiProperty({ example: 'johndoe@email.com' })
  email: string;
}

export class ReponseRecoverPasswordEmail {
  @ApiProperty({
    example:
      'An email has been sent with instructions for resetting your password.',
  })
  message: string;
}

export class ReponseRestPasswordEmail {
  @ApiProperty({
    example: 'Successfully reset password',
  })
  message: string;
}

export class LoginUnauthorizedExceptionError {
  @ApiProperty({ example: 401 })
  statusCode: number;
  @ApiProperty({ example: 'Email address or password provided is incorrect.' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

export class RecoverNotFoundExeptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'There is no user registered with this email' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}

export class ResetFoundExeptionError {
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'Candidate not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
}
