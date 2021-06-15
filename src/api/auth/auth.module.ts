import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { PasswordModule } from "../../utils/password/password.module";
import { SessionSerializer } from "./session.serializer";

@Module({
  imports: [UsersModule, PassportModule, PasswordModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
