import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {CreateUserDto} from "./dto/create.user.dto";
import {UserService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private userService: UserService) {}

  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 201, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'det all users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'det one user'})
  @ApiResponse({status: 200, type: User})
  @Get()
  getOneUserById(
    @Param('id') id: number
  ) {
    return this.userService.getOneUser(id);
  }

}
