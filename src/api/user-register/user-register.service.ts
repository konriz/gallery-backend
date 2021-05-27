import { Injectable } from "@nestjs/common";
import { NewUserDto } from "./dto/new-user.dto";
import { UsersService } from "../users/users.service";
import { UserDto } from "../users/dto/user.dto";
import { PasswordService } from "../../utils/password/password.service";

@Injectable()
export class UserRegisterService {
  constructor(
    private readonly userService: UsersService,
    private readonly passwordService: PasswordService,
  ) {}

  async registerUser(newUserDto: NewUserDto) {
    const userToSave = await this.createUser(newUserDto);
    return this.userService.createUser(userToSave);
  }

  private async createUser(newUserDto: NewUserDto): Promise<UserDto> {
    const hashedPassword = await this.passwordService.hash(newUserDto.password);
    return { email: newUserDto.email, password: hashedPassword };
  }
}
