import { Injectable } from "@nestjs/common";
import { PictureDto } from "./dto/picture.dto";
import { PictureEntity } from "../../entity/picture/picture.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PicturesService {
  constructor(@InjectRepository(PictureEntity) private picturesRepository: Repository<PictureEntity>) {
  }

  async findAllPictures() {
    return this.picturesRepository.find();
  }

  async getPicture(id: number) {
    return this.picturesRepository.find({ id });
  }

  async savePicture(pictureDto: PictureDto) {
    return this.picturesRepository.save(pictureDto);
  }

  async updatePicture(id: number, pictureDto: PictureDto) {
    return this.picturesRepository.update({ id }, pictureDto);
  }

  async deletePicture(id: number) {
    return this.picturesRepository.delete({ id });
  }
}
