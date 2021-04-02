import { BasicEntity } from "../abstract/basic.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { PictureEntity } from "../picture/picture.entity";

@Entity()
export class CommentEntity extends BasicEntity {
  @Column() content: string;

  @ManyToOne(() => PictureEntity, (picture) => picture.commentsList, {
    onDelete: "CASCADE",
  })
  picture: PictureEntity;
}
