import { Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Post} from "../posts/posts.model";

interface UserCreation {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreation> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.com', description: 'email of user'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Vasya Cocos', description: 'name of user'})
    @Column({type: DataType.STRING, allowNull: false})
    username: string;

    @ApiProperty({example: 'true', description: 'user is study or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    status: boolean;

    @ApiProperty({example: 'Lviv', description: 'city of user'})
    @Column({type: DataType.STRING, allowNull: true})
    city: string;

    @HasMany(() => Post)
    posts: Post[];
}
