import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PicturesModule } from "./api/pictures/pictures.module";

@Module({
  imports: [TypeOrmModule.forRoot(), PicturesModule],
})
export class AppModule {
}
