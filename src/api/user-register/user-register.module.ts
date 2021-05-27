import { Module } from "@nestjs/common";
import { UserRegisterController } from "./user-register.controller";
import { UserRegisterService } from "./user-register.service";
import { UsersModule } from "../users/users.module";
import { PasswordModule } from "../../utils/password/password.module";

@Module({
  controllers: [UserRegisterController],
  providers: [UserRegisterService],
  imports: [UsersModule, PasswordModule],
})
export class UserRegisterModule {}
