import { Router } from "express";
import { artistsController } from "../controllers/artistsController";
import { checkAdminRoleHandler } from "../../middlewares/checkAdminRoleHandler";
import { jwtHandler } from "../../middlewares/jwtHandler";
import { upload } from "../storageMulter/storage";

export const artistsRouter = Router();

artistsRouter.get("/artists", artistsController.getAll);
artistsRouter.get("/artists/:artistId", artistsController.getById);
artistsRouter.get("/artists/:artistId/songs", artistsController.getSongs);
artistsRouter.post("/artists", jwtHandler, checkAdminRoleHandler, upload.single("cover"), artistsController.add);
artistsRouter.put("/artists/:artistId", jwtHandler, checkAdminRoleHandler, artistsController.update);
artistsRouter.delete("/artists/:artistId", jwtHandler, checkAdminRoleHandler, artistsController.delete);