import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoteEntity } from "../../entity/vote/vote.entity";
import { VotesService } from "./votes.service";
import { VotesController } from "./votes.controller";

@Module({
  imports: [TypeOrmModule.forFeature([VoteEntity])],
  providers: [VotesService],
  controllers: [VotesController],
})
export class VotesModule {}
