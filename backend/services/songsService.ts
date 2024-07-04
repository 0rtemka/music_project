import { ApiError } from "../errors/errorRequest";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";
import { songsRepo } from "../repos/songsRepo";
import { artistsService } from "./artistsService";

class SongsService {
  async getAll() {
    return await songsRepo.findAll();
  }

  async getAlbums() {
    return await songsRepo.findAlbums();
  }

  async getById(songId: number) {
    const song = await songsRepo.findById(songId);
    if (!song) {
      throw new ApiError(
        404,
        `Song with id = ${songId} not found`,
        new Date(Date.now())
      );
    }
    return song;
  }

  async getByArtistId(artistId: number) {
    return await songsRepo.findByArtistId(artistId);
  }

  async add(song: Song, artistsIds: number[]) {
    const artists: Artist[] = [];

    await artistsIds.forEach(async (artistId: number) => {
      const artist = await artistsService.getById(artistId);
      if (artist) artists.push(artist);
    });

    await songsRepo.save(song, artists);
  }

  async update(songId: number, song: Song) {
    await songsRepo.update(songId, song);
  }

  async delete(songId: number) {
    await songsRepo.delete(songId);
  }
};

export const songsService = new SongsService();