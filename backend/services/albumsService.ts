import { ApiError } from "../errors/errorRequest";
import { Album } from "../models/Album";
import { albumsRepo } from "../repos/albumsRepo";

class AlbumsService {
  async getAll() {
    return await albumsRepo.findAll();
  }

  async getById(albumId: number) {
    const album = await albumsRepo.findById(albumId);
    if (!album)
      throw new ApiError(
        404,
        `Альбом с id = ${albumId} не найден`,
        new Date(Date.now())
      );
  }

  async add(album: Album) {
    await albumsRepo.save(album);
  }

  async update(albumId: number, album: Album) {
    await albumsRepo.update(albumId, album);
  }

  async delete(albumId: number) {
    await albumsRepo.delete(albumId);
  }
};

export const albumsService = new AlbumsService();