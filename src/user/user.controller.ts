import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from './user.service';
import { User } from "./user.entity";

@ApiTags('USERS')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  // @ApiResponse({status: 200, type: User[]})
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({status: 201, type: User})
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const { username, email, status, city, password} = body;
    const a = await this.userService.create({
      email,
      password,
      city,
      status,
      username,
    });

    console.log(a);

    return 'ok'
  }
}
