import { ApiError } from "../errors/errorRequest";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";
import { songsRepo } from "../repos/songsRepo";
import { artistsService } from "./artistsService";

class SongsService {
  async getAll() {
    return await songsRepo.findAll();
  }

  async getLatestSongs() {
    return await songsRepo.findLatestSongs();
  }

  async getLatestAlbums() {
    return await songsRepo.findLatestAlbums();
  }

  async getTopSongs() {
    return await songsRepo.findTopSongs();
  }

  async getTopAlbums() {
    return await songsRepo.findTopAlbums();
  }

  async getAlbums() {
    return await songsRepo.findAlbums();
  }

  async getAlbumsWhereTitleLike(title: string) {
    return await songsRepo.findAlbumsWhereTitleLike(title);
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

  async getSongsWhereTitleLike(title: string) {
    return await songsRepo.findSongsWhereTitleLike(title);
  }

  async getSongsByArtistId(artistId: number) {
    return await songsRepo.findSongsByArtistId(artistId);
  }

  async getAlbumsByArtistId(artistId: number) {
    return await songsRepo.findAlbumsByArtistId(artistId);
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
}

export const songsService = new SongsService();
