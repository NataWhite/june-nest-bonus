import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'email'})
  public email: string;

  @ApiProperty({example: '12345', description: 'password'})
  readonly password: string;

  @ApiProperty({example: 'Vasya Cocos', description: 'name of user'})
  public username: string;

  @ApiProperty({example: 'Lviv', description: 'City of user'})
  public city: string;

  @ApiProperty({example: 'true', description: 'study or not'})
  public status: boolean;
}
