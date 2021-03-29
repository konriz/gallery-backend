import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = ["http://localhost:8080"];
  const originFunction = (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // TODO manage CORS properly!
      callback(null, true);
    }
  };
  const corsOptions = {
    credentials: true, origin: originFunction
  };
  app.enableCors(corsOptions);
  app.use(helmet({hsts: false}));

  await app.listen(3000);
}

bootstrap();
