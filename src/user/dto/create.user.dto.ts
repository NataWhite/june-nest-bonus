import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({ example: 'lviv', description: ' city of user'})
  public city: string

  @ApiProperty({ example: 'user@mail.com', description: 'mail' })
  public email: string;

  @ApiProperty({ example: '123445', description: 'password' })
  public password: string;

  @ApiProperty({ example: 'Vasya Cocos', description: 'name of user' })
  public username: string;

  @ApiProperty({ example: 'student', description: 'study user or not' })
  public status: string;
}
