import { BasicEntity } from "../abstract/basic.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { VoteEntity } from "../vote/vote.entity";
import { CommentEntity } from "../comment/comment.entity";

@Entity()
export class PictureEntity extends BasicEntity {
  @Column() pictureUrl: string;

  @Column() name: string;

  @Column() description: string;

  @OneToMany(() => VoteEntity, (voteEntity) => voteEntity.picture)
  votesList: VoteEntity[];

  @OneToMany(() => CommentEntity, (commentEntity) => commentEntity.picture)
  commentsList: CommentEntity[];
}
