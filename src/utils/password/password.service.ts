import * as bcrypt from "bcrypt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PasswordService {
  private saltRounds = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compare(passwordCandidate: string, password: string) {
    return bcrypt.compare(passwordCandidate, password);
  }
}
