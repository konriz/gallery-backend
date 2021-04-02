import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VoteEntity } from "../../entity/vote/vote.entity";
import { VoteDto } from "./dto/vote.dto";

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(VoteEntity)
    private votesRepository: Repository<VoteEntity>,
  ) {}

  async findAllVotes() {
    return this.votesRepository.find();
  }

  async getVote(id: number) {
    return this.votesRepository.find({ id });
  }

  async saveVote(voteDto: VoteDto) {
    return this.votesRepository.save(voteDto);
  }

  async updateVote(id: number, voteDto: VoteDto) {
    return this.votesRepository.update({ id }, voteDto);
  }

  async deleteVote(id: number) {
    return this.votesRepository.delete({ id });
  }
}
