import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Post } from "../posts/posts.model";
import { AuthModule } from "../auth/auth.module";
import { fork } from "child_process";

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    forwardRef(()=> AuthModule),
  ],
  exports: [
    UserModule,
    UserService
  ]
})
export class UserModule {
}