import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../../entity/user/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  findUsers() {
    return this.usersRepository.find();
  }

  findUser(id: number) {
    return this.usersRepository.findOne({ id });
  }

  createUser(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }

  updateUser(id: number, userDto: UserDto) {
    return this.usersRepository.update({ id }, userDto);
  }

  deleteUser(id: number) {
    return this.usersRepository.delete({ id });
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }
}
