import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PicturesModule } from "./api/pictures/pictures.module";
import { VotesModule } from "./api/votes/votes.module";
import { CommentsModule } from "./api/comments/comments.module";
import { UsersModule } from "./api/users/users.module";
import { UserRegisterModule } from "./api/user-register/user-register.module";
import { AuthModule } from "./api/auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PicturesModule,
    VotesModule,
    CommentsModule,
    UsersModule,
    UserRegisterModule,
    AuthModule,
  ],
})
export class AppModule {}
