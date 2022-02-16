import {ApiProperty} from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'email'})
  @IsString({message: 'email must be string'})
  @IsEmail({}, {message: 'incorrect email'})
  public email: string;

  @ApiProperty({example: '12345', description: 'password'})
  @IsString({message: 'password must be string'})
  @Length(4,15, {message: 'mast be from 4 to 15 symbols'})
  readonly password: string;

  @ApiProperty({example: 'Vasya Cocos', description: 'name of user'})
  @IsString({message: 'username must be string'})
  public username: string;

  @ApiProperty({example: 'Lviv', description: 'City of user'})
  @IsString({message: 'city must be string'})
  public city: string;

  @ApiProperty({example: 'true', description: 'study or not'})
  @IsBoolean({message: 'status must be boolean'})
  public status: boolean;
}
