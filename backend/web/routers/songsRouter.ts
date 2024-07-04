import { Router } from "express";
import { songsController } from "../controllers/songsController";
import { upload } from "../storageMulter/storage";
import { songsReviewsController } from "../controllers/songsReviewsController";

export const songsRouter = Router();

songsRouter.get("/albums", songsController.getAlbums);
songsRouter.get("/songs", songsController.getAll);
songsRouter.get("/songs/:songId", songsController.getById);
songsRouter.get("/songs/:songId/reviews", songsReviewsController.getAllBySong);
songsRouter.post("/songs", upload.single("cover"), songsController.add);
songsRouter.put("/songs/:songId", songsController.update);
songsRouter.delete("/songs/:songId", songsController.delete);