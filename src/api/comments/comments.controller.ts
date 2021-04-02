import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentDto } from "./dto/comment.dto";

@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async findAllComments() {
    return this.commentsService.findAllComments();
  }

  @Get(":id")
  async getComment(@Param("id") id: number) {
    return this.commentsService.getComment(id);
  }

  @Post()
  async createComment(@Body() commentDto: CommentDto) {
    return this.commentsService.saveComment(commentDto);
  }

  @Put(":id")
  async updateComment(@Param("id") id: number, @Body() commentDto: CommentDto) {
    return this.commentsService.updateComment(id, commentDto);
  }

  @Delete(":id")
  async deleteComment(@Param("id") id: number) {
    return this.commentsService.deleteComment(id);
  }
}
