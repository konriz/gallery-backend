import { Injectable } from "@nestjs/common";
import { UserDataInterface } from "./user-data.interface";
import { UsersService } from "../users/users.service";
import { PasswordService } from "../../utils/password/password.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly passwordService: PasswordService,
  ) {}

  async validateUser(
    email: string,
    passwordCandidate: string,
  ): Promise<UserDataInterface | null> {
    const user = await this.userService.findByEmail(email);
    if (
      user &&
      (await this.passwordService.compare(passwordCandidate, user.password))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
