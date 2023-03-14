import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class CreateCandidateUserDto {
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
  @IsEqualTo<CreateCandidateUserDto>('password')
  confirmPassword?: string;

  roles?: string;

  provider?: string;

  providerId?: string;
}
