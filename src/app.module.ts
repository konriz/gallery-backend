import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PicturesModule } from "./api/pictures/pictures.module";
import { VotesModule } from "./api/votes/votes.module";

@Module({
  imports: [TypeOrmModule.forRoot(), PicturesModule, VotesModule],
})
export class AppModule {}
