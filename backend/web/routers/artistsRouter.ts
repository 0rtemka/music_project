import { Router } from "express";
import { artistsController } from "../controllers/artistsController";
import { checkAdminRoleHandler } from "../../middlewares/checkAdminRoleHandler";
import { jwtHandler } from "../../middlewares/jwtHandler";
import { upload } from "../storageMulter/storage";

export const artistsRouter = Router();

artistsRouter.get("/artists", artistsController.getAll);
artistsRouter.get("/artists/:artistId", artistsController.getById);
artistsRouter.get("/artists/:artistId/songs", artistsController.getSongs);
artistsRouter.get("/artists/:artistId/albums", artistsController.getAlbums);
artistsRouter.post("/artists", jwtHandler, checkAdminRoleHandler, upload.fields([{name: "cover", maxCount: 1}, {name: "miniCover", maxCount: 1}]), artistsController.add);
artistsRouter.put("/artists/:artistId", jwtHandler, checkAdminRoleHandler, artistsController.update);
artistsRouter.delete("/artists/:artistId", jwtHandler, checkAdminRoleHandler, artistsController.delete);