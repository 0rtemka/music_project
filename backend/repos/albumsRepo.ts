import { pg } from "../db/connect";
import { Album } from "../models/Album";

const Albums = () => pg<Album>("albums");

class AlbumsRepo {
  async findAll() {
    return Albums();
  }

  async findById(id: number) {
    return Albums().where("id", "=", id).first();
  }

  async save(album: Album) {
    Albums().insert(album);
  }

  async update(albumId: number, album: Album) {
    Albums().where("id", "=", albumId).update(album);
  }

  async delete(albumId: number) {
    Albums().where("id", "=", albumId).del();
  }
};

export const albumsRepo = new AlbumsRepo();