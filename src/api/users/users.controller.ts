import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() findUsers() {
    return this.usersService.findUsers();
  }

  @Get(":id") findUser(@Param("id") id: number) {
    return this.usersService.findUser(id);
  }

  @Put(":id") updateUser(@Param("id") id: number, @Body() userDto: UserDto) {
    return this.usersService.updateUser(id, userDto);
  }

  @Delete(":id") deleteUser(@Param("id") id: number) {
    return this.usersService.deleteUser(id);
  }
}
