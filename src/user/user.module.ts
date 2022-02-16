import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../posts/posts.model";

@Module({
    controllers: [UsersController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User, Post]),
        forwardRef(() => AuthModule),
    ],
    exports: [
        UserService,
    ]
})
export class UserModule {}