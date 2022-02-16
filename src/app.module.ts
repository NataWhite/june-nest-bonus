import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: 'postgres',
      password: 'root',
      database: 'june-21',
      synchronize: true,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      migrationsRun: true,
      migrations: ['dist/database/migrations/*.js'],
      cli: {
        migrationsDir: 'database/migrations',
      }
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
