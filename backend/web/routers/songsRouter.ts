import { Router } from "express";
import { songsController } from "../controllers/songsController";
import { upload } from "../storageMulter/storage";
import { songsReviewsController } from "../controllers/songsReviewsController";
import { checkAdminRoleHandler } from "../../middlewares/checkAdminRoleHandler";
import { jwtHandler } from "../../middlewares/jwtHandler";

export const songsRouter = Router();

songsRouter.get("/albums", songsController.getAlbums);
songsRouter.get("/songs", songsController.getAll);
songsRouter.get("/songs/latest", songsController.getLatestSongs);
songsRouter.get("/albums/latest", songsController.getLatestAlbums);
songsRouter.get("/songs/top", songsController.getTopSongs);
songsRouter.get("/albums/top", songsController.getTopAlbums);
songsRouter.get("/songs/:songId", songsController.getById);
songsRouter.get("/songs/:songId/reviews", songsReviewsController.getAllBySong);
songsRouter.post("/songs", jwtHandler ,checkAdminRoleHandler, upload.single("cover"), songsController.add);
songsRouter.put("/songs/:songId", jwtHandler, checkAdminRoleHandler, songsController.update);
songsRouter.delete("/songs/:songId", jwtHandler, checkAdminRoleHandler, songsController.delete);