import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AbstractService } from "../common/abstract.service";

@Injectable()
export class UserService extends AbstractService<User>{
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    super(userRepository)
  }

  async createUser(dto) {
    return this.create(dto);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find({})
  }

  findOneUser(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
