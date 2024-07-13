import { NextFunction, Request, Response } from "express";
import { artistsService } from "../../services/artistsService";
import { Artist } from "../../models/Artist";

export class ArtistsController {
  getAll(req: Request, res: Response, next: NextFunction) {
    if (req.query.name) {
      const artistName = req.query.name as string;

      artistsService
        .getWhereNameLike(artistName)
        .then((artists) => {
          res.send(artists);
        })
        .catch((err) => {
          next(err);
        });
    } else {
      artistsService
        .getAll()
        .then((artists) => {
          res.send(artists);
        })
        .catch((err) => {
          next(err);
        });
    }
  }

  getWhereNameLike(req: Request, res: Response, next: NextFunction) {
    const artistName = req.query.name as string;
    console.log(artistName);

    artistsService
      .getWhereNameLike(artistName)
      .then((artists) => {
        res.send(artists);
      })
      .catch((err) => {
        next(err);
      });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    const artistId = parseInt(req.params.artistId);
    artistsService
      .getById(artistId)
      .then((artist) => {
        res.send(artist);
      })
      .catch((err) => {
        next(err);
      });
  }

  getSongs(req: Request, res: Response, next: NextFunction) {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .getArtistsSongs(artistId)
      .then((songs) => {
        res.send(songs);
      })
      .catch((err) => {
        next(err);
      });
  }

  getAlbums(req: Request, res: Response, next: NextFunction) {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .getArtistsAlbums(artistId)
      .then((albums) => {
        res.send(albums);
      })
      .catch((err) => {
        next(err);
      });
  }

  add(req: Request, res: Response, next: NextFunction) {
    const form = req.body;
    const files: any = req.files;
    const cover = files.cover ? files.cover[0] : null;
    const miniCover = files.miniCover ? files.miniCover[0] : null;    

    const artist: Artist = {
      name: form.name,
      cover: cover.filename,
      mini_cover: miniCover.filename,
    };

    artistsService
      .add(artist)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        next(err);
      });
  }

  update(req: Request, res: Response, next: NextFunction) {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .update(artistId, req.body)
      .then(() => {
        res.send();
      })
      .catch((err) => {
        next(err);
      });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    const artistId: number = parseInt(req.params.artistId);
    artistsService
      .delete(artistId)
      .then(() => {
        res.send();
      })
      .then((err) => {
        next(err);
      });
  }
}

export const artistsController = new ArtistsController();
