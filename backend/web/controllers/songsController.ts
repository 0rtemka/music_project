import { NextFunction, Request, Response } from "express";
import { songsService } from "../../services/songsService";
import { Song } from "../../models/Song";
import { AddSongDto } from "../dtos/AddSongDto";

class SongsController {
  getAll(req: Request, res: Response, next: NextFunction){
    songsService
      .getAll()
      .then((songs) => {
        res.send(songs);
      })
      .catch((err) => {
        next(err);
      });
  }

  getAlbums(req: Request, res: Response, next: NextFunction) {
    songsService.getAlbums().then(albums => {
      res.send(albums);
    }).catch(err => {
      next(err);
    })
  }

  getById(req: Request, res: Response, next: NextFunction) {
    const songId = parseInt(req.params.songId);

    songsService
      .getById(songId)
      .then((song) => {
        res.send(song);
      })
      .catch((err) => {
        next(err);
      });
  }

  add(req: Request, res: Response, next: NextFunction) {
    const form: AddSongDto = req.body;

    const song: Song = {
      title: form.title,
      cover: req.file?.path,
      is_album: form.is_album,
      release_date: form.release_date,
    };

    songsService
      .add(song, req.body.artistsIds)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        next(err);
      });
  }

  update(req: Request, res: Response, next: NextFunction) {
    const songId = parseInt(req.params.songId);

    songsService
      .update(songId, req.body)
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        next(err);
      });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    const songId = parseInt(req.params.songId);
    songsService
      .delete(songId)
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        next(err);
      });
  }
};

export const songsController = new SongsController();