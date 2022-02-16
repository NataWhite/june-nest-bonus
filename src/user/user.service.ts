import { Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create.user.dto";

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userRepository: typeof User) {}

  createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }

  getOneUser(id: number) {
    return this.userRepository.findOne({where: {id}})
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({where: {email}})
  }

}
