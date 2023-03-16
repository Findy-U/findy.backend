import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class CreateCandidateUserDto {
  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do nome completo do usuário candidato e deve conter no mínimo 3 caracteres.',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do e-mail que será usado para realizar o login na aplicação.',
    example: 'johndoe@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description:
      'Capo é obrigatório, mínimo de 8 caracteres, e tem que ser senha forte (1 letra maiúscular, 1 número e 1 caracter especial).',
    example: 'B12#&d@m',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password?: string;

  @ApiProperty({
    description:
      'Campo é obrigatório, campo usado para confirmar a senha digitada.',
    example: 'B12#&d@m',
  })
  @IsNotEmpty()
  @IsString()
  @IsEqualTo<CreateCandidateUserDto>('password')
  confirmPassword?: string;

  roles?: string;

  provider?: string;

  providerId?: string;
  recoverToken?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
