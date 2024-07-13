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

  async getByName(name: string) {
    return await artistsRepo.findByName(name); 
  }

  async getWhereNameLike(artistName: string) {
    return await artistsRepo.findWhereNameLike(artistName);
  }

  async getArtistsSongs(artistId: number) {
    const artist = await artistsService.getById(artistId);
    return await songsService.getSongsByArtistId(artistId);
  }

  async getArtistsAlbums(artistId: number) {
    const artist = await artistsService.getById(artistId);
    return await songsService.getAlbumsByArtistId(artistId);
  }

  async add(artist: Artist) {
    const artistFromDb = await this.getByName(artist.name);
    if (artistFromDb) {
      throw ApiError.badRequest(`Артист с именем ${artist.name} уже существует`)
    }
    return await artistsRepo.save(artist);
  }

  async update(artistId: number, artist: Artist) {
    return await artistsRepo.update(artistId, artist);
  }

  async delete(artistId: number) {
    return await artistsRepo.delete(artistId);
  }
}

export const artistsService = new ArtistsService();
