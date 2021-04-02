import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { CommentEntity } from "../../entity/comment/comment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
