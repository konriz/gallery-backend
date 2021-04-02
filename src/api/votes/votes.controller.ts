import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { VotesService } from "./votes.service";
import { VoteDto } from "./dto/vote.dto";

@Controller("votes")
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get()
  async findAllVotes() {
    return this.votesService.findAllVotes();
  }

  @Get(":id")
  async getVote(@Param("id") id: number) {
    return this.votesService.getVote(id);
  }

  @Post()
  async createVote(@Body() voteDto: VoteDto) {
    return this.votesService.saveVote(voteDto);
  }

  @Put(":id")
  async updateVote(@Param("id") id: number, @Body() voteDto: VoteDto) {
    return this.votesService.updateVote(id, voteDto);
  }

  @Delete(":id")
  async deleteVote(@Param("id") id: number) {
    return this.votesService.deleteVote(id);
  }
}
