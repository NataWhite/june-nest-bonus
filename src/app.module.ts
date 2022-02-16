import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/users.model';
import { ConfigModule } from '@nestjs/config';
import { Post } from "./posts/posts.model";
import { PostsModule } from "./posts/posts.module";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Post],
      autoLoadModels: true,
    }),
    UserModule,
    PostsModule,
    AuthModule,
    FilesModule
  ],
})
export class AppModule {}
