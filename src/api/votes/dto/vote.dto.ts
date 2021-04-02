import { PictureDto } from "../../pictures/dto/picture.dto";

export class VoteDto {
  id?: number;
  picture?: PictureDto;
  value?: number;
}
