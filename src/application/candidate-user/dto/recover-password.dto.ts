import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { IsEqualTo } from '../../../common/decorators/password-confirm.decorator';

export class RecoverPasswordDto {
  @ApiProperty({
    example: '@12345Ab',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password?: string;

  @ApiProperty({
    example: '@12345Ab',
  })
  @IsNotEmpty()
  @IsString()
  @IsEqualTo<RecoverPasswordDto>('password')
  confirmPassword?: string;

  @ApiProperty({
    example:
      '6&token=9885b045f5bb82b3c9aa36cb8a0b2b95d4d9b034d7c8478155d1e6cc25e903bc',
  })
  @IsNotEmpty()
  @IsString()
  recoverToken: string;
}
