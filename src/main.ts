import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const originFunction = (origin, callback) => {
    callback(null, true);
  };

  const corsOptions = {
    credentials: true,
    origin: originFunction,
  };
  app.enableCors(corsOptions);
  app.use(helmet({ hsts: false }));

  const store = new session.MemoryStore();
  const sessionOptions: session.SessionOptions = {
    name: "app.sid",
    secret: "my-session-secret",
    resave: false,
    saveUninitialized: false,
    store,
  };
  app.use(session(sessionOptions));

  // Use passport for auth
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}

bootstrap();
