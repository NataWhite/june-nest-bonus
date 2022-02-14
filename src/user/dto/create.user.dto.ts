import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'mail' })
  readonly email: string;

  @ApiProperty({ example: '123445', description: 'password' })
  readonly password: string;
}
