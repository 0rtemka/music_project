import { pg } from "../db/connect";
import { Artist } from "../models/Artist";

const Artists = () => pg<Artist>("artists");

class ArtistsRepo {
  async findAll() {
    return await Artists();
  }

  async findById(id: number) {
    return await Artists()
      .select(
        "artists.*",
        pg.raw(
          `(select round(avg(rating), 0) from songs_rating srat
      join artists_songs asongs on asongs.song_id = srat.song_id
      where asongs.artist_id = ${id} and srat.rating <> 0) as rating`
        )
      )
      .where("id", "=", id)
      .first();
  }

  async findByName(name: string) {
    return await Artists().where("name", "=", name).first();
  }

  async findWhereNameLike(artistName: string) {
    return await Artists().whereILike("name", `%${artistName}%`);
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
}

export const artistsRepo = new ArtistsRepo();
