import { Type } from 'class-transformer';
import {
  IsEmpty,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength,
  Max,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  id: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
  @IsInt()
  @Min(18)
  @Max(90)
  @IsNotEmpty()
  @Type(() => Number)
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  address: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(6)
  gender: string;

  @IsBoolean()
  @IsNotEmpty()
  isBangladeshi: boolean;
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/, {
    message:
      'password should have at least one lowercase, one upper case , one special char, one number and length should be between 8 to 20 char ',
  })
  password: string;
}
