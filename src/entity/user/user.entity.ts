import { BasicEntity } from "../abstract/basic.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UserEntity extends BasicEntity {
  @Column() email: string;

  @Column() password: string;
}
