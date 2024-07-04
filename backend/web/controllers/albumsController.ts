import { NextFunction, Request, Response } from "express";
import { albumsService } from "../../services/albumsService";
import { Album } from "../../models/Album";

export const albumsController = {
  getAll: (req: Request, res: Response, next: NextFunction) => {
    albumsService
      .getAll()
      .then((albums) => {
        res.send(albums);
      })
      .catch((err) => {
        next(err);
      });
  },

  getById: (req: Request, res: Response, next: NextFunction) => {
    const albumId: number = parseInt(req.params.albumId);
    albumsService
      .getById(albumId)
      .then((album) => {
        res.send(album);
      })
      .catch((err) => {
        next(err);
      });
  },

  add: (req: Request, res: Response, next: NextFunction) => {
    const album: Album = req.body;
    albumsService
      .add(album)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        next(err);
      });
  },

  update: (req: Request, res: Response, next: NextFunction) => {
    const albumId: number = parseInt(req.params.albumId);

    const album: Album = req.body;

    albumsService
      .update(albumId, album)
      .then(() => {
        res.send();
      })
      .catch((err) => {
        next(err);
      });
  },

  delete: (req: Request, res: Response, next: NextFunction) => {
    const albumId: number = parseInt(req.params.albumId);

    albumsService
      .delete(albumId)
      .then(() => {
        res.send();
      })
      .catch((err) => {
        next(err);
      });
  },
};
