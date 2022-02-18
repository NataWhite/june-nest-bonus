import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import {CreateUserDto} from "./dto/create.user.dto";
import {UserService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import { JwtAuthGuard } from "../auth/jwt.auth.guard";

@ApiTags('Users')
@Controller('users')
export class UserController {

  constructor(private userService: UserService) {}

  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 201, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'det all users'})
  @ApiResponse({status: 200, type: [User]})
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'det one user'})
  @ApiResponse({status: 200, type: User})
  @Get('/:id')
  getOneUserById(
    @Param('id') id: number
  ) {
    return this.userService.getOneUser(id);
  }

}
