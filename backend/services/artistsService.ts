import { ApiError } from "../errors/errorRequest";
import { Artist } from "../models/Artist";
import { artistsRepo } from "../repos/artistsRepo";
import { songsService } from "./songsService";

class ArtistsService {
  async getAll() {
    return await artistsRepo.findAll();
  }

  async getById(artistId: number) {
    const artist = await artistsRepo.findById(artistId);
    if (!artist)
      throw new ApiError(
        404,
        `Исполнитель с id = ${artistId} не найден`,
        new Date(Date.now())
      );
    return artist;
  }

  async getArtistsSongs(artistId: number) {
      const artist = await artistsService.getById(artistId);
      return await songsService.getByArtistId(artistId);
  }

  async add(artist: Artist) {
    return await artistsRepo.save(artist);
  }

  async update(artistId: number, artist: Artist) {
    return await artistsRepo.update(artistId, artist);
  }

  async delete(artistId: number) {
    return await artistsRepo.delete(artistId);
  }
};

export const artistsService = new ArtistsService();