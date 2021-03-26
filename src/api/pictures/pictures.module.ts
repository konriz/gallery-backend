import { Module } from "@nestjs/common";
import { PicturesService } from "./pictures.service";
import { PicturesController } from "./pictures.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PictureEntity } from "../../entity/picture/picture.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PictureEntity])], providers: [PicturesService], controllers: [PicturesController],
})
export class PicturesModule {
}
