import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommentEntity } from "../../entity/comment/comment.entity";
import { CommentDto } from "./dto/comment.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
  ) {}

  async findAllComments() {
    return this.commentsRepository.find();
  }

  async getComment(id: number) {
    return this.commentsRepository.find({ id });
  }

  async saveComment(commentDto: CommentDto) {
    return this.commentsRepository.save(commentDto);
  }

  async updateComment(id: number, commentDto: CommentDto) {
    return this.commentsRepository.update({ id }, commentDto);
  }

  async deleteComment(id: number) {
    return this.commentsRepository.delete({ id });
  }
}
