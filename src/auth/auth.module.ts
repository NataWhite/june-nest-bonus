import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: "secret",
      signOptions: {
        expiresIn: "12h"
      }
    }),
    UserService,
  ],
  exports: [
    AuthModule,
    JwtModule
  ]
})
export class AuthModule {
}
