import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PicturesModule } from "./api/pictures/pictures.module";
import { VotesModule } from "./api/votes/votes.module";
import { CommentsModule } from "./api/comments/comments.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PicturesModule,
    VotesModule,
    CommentsModule,
  ],
})
export class AppModule {}
