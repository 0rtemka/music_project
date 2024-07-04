import { NextFunction, Request, Response } from "express";
import { artistsService } from "../../services/artistsService";
import { Artist } from "../../models/Artist";

export const artistsController = {
  getAll: (req: Request, res: Response, next: NextFunction) => {
    artistsService
      .getAll()
      .then((artists) => {
        res.send(artists);
      })
      .catch((err) => {
        next(err);
      });
  },

  getById: (req: Request, res: Response, next: NextFunction) => {
    const artistId = parseInt(req.params.artistId);
    artistsService
      .getById(artistId)
      .then((artist) => {
        res.send(artist);
      })
      .catch((err) => {
        next(err);
      });
  },

  getSongs: (req: Request, res: Response, next: NextFunction) => {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .getArtistsSongs(artistId)
      .then((songs) => {
        res.send(songs);
      })
      .catch((err) => {
        next(err);
      });
  },

  add: (req: Request, res: Response, next: NextFunction) => {
    const form = req.body;
    const artist: Artist = {
      name: form.name,
      cover: req.file!.path,
    };

    artistsService
      .add(artist)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        next(err);
      });
  },

  update: (req: Request, res: Response, next: NextFunction) => {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .update(artistId, req.body)
      .then(() => {
        res.send();
      })
      .catch((err) => {
        next(err);
      });
  },

  delete: (req: Request, res: Response, next: NextFunction) => {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .delete(artistId)
      .then(() => {
        res.send();
      })
      .then((err) => {
        next(err);
      });
  },
};