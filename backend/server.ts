import dotenv from "dotenv";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import { songsRouter } from "./web/routers/songsRouter";
import { errorHandler } from "./middlewares/errorHandler";
import { artistsRouter } from "./web/routers/artistsRouter";
import { albumsRouter } from "./web/routers/albumsRouter";
import { authRouter } from "./web/routers/authRouter";
import { usersRouter } from "./web/routers/usersRouter";

dotenv.config();
const port = process.env.PORT || 5000;
const app: Express = express();

app.use(express.json());
app.use(cookieParser())
app.use(songsRouter);
// app.use(albumsRouter);
app.use(artistsRouter);
app.use(authRouter);
app.use(usersRouter);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
