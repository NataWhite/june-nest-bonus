import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthUserDto } from "./dto/auth.user";
import { CreateUserDto } from "../user/dto/create.user.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthController) {
  }

  @Post('/login')
  login(@Body() userDto: AuthUserDto){
    return this.authService.login(userDto)
  }

  // @Post('/registration')
  // registrationUser(@Body() userDto: CreateUserDto) {
  //   return this.authService.registration(userDto)
  // }
}
