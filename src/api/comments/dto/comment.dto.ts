import { PictureDto } from "../../pictures/dto/picture.dto";

export class CommentDto {
  id?: number;
  picture?: PictureDto;
  content?: string;
}
