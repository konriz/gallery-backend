import { BasicEntity } from "../abstract/basic.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { PictureEntity } from "../picture/picture.entity";

@Entity()
export class VoteEntity extends BasicEntity {
  @Column() value: number;

  @ManyToOne(() => PictureEntity, (picture) => picture.votesList, {
    onDelete: "CASCADE",
  })
  picture: PictureEntity;
}
