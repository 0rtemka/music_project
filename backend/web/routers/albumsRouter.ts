import { Router } from "express";
import { albumsController } from "../controllers/albumsController";

export const albumsRouter = Router();

albumsRouter.get("/albums", albumsController.getAll);
albumsRouter.get("/albums/:albumId", albumsController.getById);
albumsRouter.post("/albums", albumsController.add);
albumsRouter.put("albums/:albumId", albumsController.update);
albumsRouter.delete("/albums/:albumId", albumsController.delete);