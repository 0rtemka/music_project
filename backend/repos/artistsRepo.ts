import { pg } from "../db/connect";
import { Artist } from "../models/Artist";

const Artists = () => pg<Artist>("artists");

class ArtistsRepo {
  async findAll() {
    return await Artists();
  }

  async findById(id: number) {
    return await Artists().where("id", "=", id).first();
  }

  async save(artist: Artist) {
    await Artists().insert(artist);
  }

  async update(id: number, artist: Artist) {
    await Artists().where("id", "=", id).update(artist);
  }

  async delete(id: number) {
    await Artists().where("id", "=", id).del();
  }
};

export const artistsRepo = new ArtistsRepo();