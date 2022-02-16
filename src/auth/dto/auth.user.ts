import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class AuthUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'email'})
  @IsString({message: 'email must be string'})
  @IsEmail({}, {message: 'incorrect email'})
  public email: string;

  @ApiProperty({example: '12345', description: 'password'})
  @IsString({message: 'password must be string'})
  @Length(4,15, {message: 'mast be from 4 to 15 symbols'})
  readonly password: string;
}