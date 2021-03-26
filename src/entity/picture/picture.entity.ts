import { BasicEntity } from "../abstract/basic.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class PictureEntity extends BasicEntity {
  @Column() pictureUrl: string;

  @Column() name: string;

  @Column() description: string;

}
