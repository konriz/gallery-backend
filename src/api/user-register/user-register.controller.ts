import { Body, Controller, Post } from "@nestjs/common";
import { NewUserDto } from "./dto/new-user.dto";
import { UserRegisterService } from "./user-register.service";

@Controller("register")
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) {}

  @Post() register(@Body() newUserDto: NewUserDto) {
    return this.userRegisterService.registerUser(newUserDto);
  }
}
