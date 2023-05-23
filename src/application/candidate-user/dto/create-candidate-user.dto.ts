import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class CreateCandidateUserDto {
  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do nome completo do usuário candidato e deve conter no mínimo 3 caracteres.',
    example: 'John Doe',
  })
  @IsNotEmpty({ message: 'O nome de usuário não pode estar vazio.' })
  @IsString()
  @MinLength(3, {
    message: 'O nome de usuário deve ter no mínimo 3 caracteres.',
  })
  @MaxLength(30, {
    message: 'O nome de usuário deve ter no máximo 30 caracteres.',
  })
  @Matches(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/g, {
    message: 'O nome de usuário deve conter apenas letras',
  })
  name: string;

  @ApiProperty({
    description:
      'Campo é obrigatório. Trata-se do e-mail que será usado para realizar o login na aplicação.',
    example: 'johndoe@email.com',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsEmail(
    {},
    { message: 'O e-mail deve ser válido, no formato "usuario@email.com.br"' },
  )
  email: string;

  @ApiProperty({
    type: String,
    description:
      'Capo é obrigatório, mínimo de 8 caracteres, e tem que ser senha forte (1 letra maiúscular, 1 número e 1 caracter especial).',
    example: 'B12#&d@m',
  })
  @IsString()
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @MaxLength(20, { message: 'A senha deve ter no máximo 20 caracteres.' })
  @Matches(/(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha escolhida é muito fraca. Por favor, escolha uma senha mais forte.',
  })
  password?: string;

  @ApiProperty({
    description:
      'Campo é obrigatório, campo usado para confirmar a senha digitada.',
    example: 'B12#&d@m',
  })
  @IsNotEmpty({ message: 'A confirmação de senha não pode estar vazia.' })
  @IsString()
  @IsEqualTo<CreateCandidateUserDto>('password', {
    message: 'As senhas não coincidem.',
  })
  confirmPassword?: string;

  roles?: string;

  provider?: string;

  providerId?: string;
  recoverToken?: string;

  createdAt?: Date;
  updatedAt?: Date;
  recoverTokenExpiresAt?: Date;
}
