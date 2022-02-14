import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.entity";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    exports: [
        UserService
    ]
})
export class UserModule {
}
