import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class RecoverPasswordDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password?: string;

  @IsNotEmpty()
  @IsString()
  @IsEqualTo<RecoverPasswordDto>('password')
  confirmPassword?: string;

  @IsNotEmpty()
  @IsString()
  recoverToken: string;
}
