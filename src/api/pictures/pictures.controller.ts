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
import { PicturesService } from "./pictures.service";
import { PictureDto } from "./dto/picture.dto";
import { AuthenticatedGuard } from "../auth/authenticated-guard.service";

@Controller("pictures")
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Get()
  async findAllPictures() {
    return this.picturesService.findAllPictures();
  }

  @Get(":id")
  async getPicture(@Param("id") id: number) {
    return this.picturesService.getPicture(id);
  }

  @Post()
  @UseGuards(AuthenticatedGuard)
  async createPicture(@Body() pictureDto: PictureDto) {
    return this.picturesService.savePicture(pictureDto);
  }

  @Put(":id")
  async updatePicture(@Param("id") id: number, @Body() pictureDto: PictureDto) {
    return this.picturesService.updatePicture(id, pictureDto);
  }

  @Delete(":id")
  async deletePicture(@Param("id") id: number) {
    return this.picturesService.deletePicture(id);
  }
}
