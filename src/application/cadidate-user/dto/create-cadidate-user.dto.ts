import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class CreateCadidateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password?: string;

  @IsNotEmpty()
  @IsString()
  @IsEqualTo<CreateCadidateUserDto>('password')
  confirmPassword?: string;

  role?: string;

  provider?: string;

  providerId?: string;
}
