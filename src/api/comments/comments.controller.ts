import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentDto } from "./dto/comment.dto";
import { AuthenticatedGuard } from "../auth/authenticated-guard.service";

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
  @UseGuards(AuthenticatedGuard)
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
