import { Router } from "express";
import { artistsController } from "../controllers/artistsController";

export const artistsRouter = Router();

artistsRouter.get("/artists", artistsController.getAll);
artistsRouter.get("/artists/:artistId", artistsController.getById);
artistsRouter.get("/artists/:artistId/songs", artistsController.getSongs);
artistsRouter.post("/artists", artistsController.add);
artistsRouter.put("/artists/:artistId", artistsController.update);
artistsRouter.delete("/artists/:artistId", artistsController.delete);