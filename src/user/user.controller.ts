import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('USERS')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  getAllUsers() {
    return { name: 'Vasya', age: 35, status: false };
  }

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService;
  }
}
