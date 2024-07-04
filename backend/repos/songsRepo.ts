import { pg } from "../db/connect";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";

const Songs = () => pg<Song>("songs");

class SongsRepo {
  async findAll() {
    return Songs()
      .select("songs.*", pg.raw("(json_agg(artists.*)) as artists"))
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .groupBy("songs.id");
  }

  async findAlbums() {
    return Songs()
      .select("songs.*", pg.raw("(json_agg(artists.*)) as artists"))
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .where("is_album", "=", "true")
      .groupBy("songs.id");
  }

  async findById(songId: number) {
    return Songs()
      .select("songs.*", pg.raw("(json_agg(artists.*)) as artists"))
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .where("songs.id", songId)
      .groupBy("songs.id")
      .first();
  }

  async findByArtistId(artistId: number) {
    return Songs()
      .select("songs.*")
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .where("artist_id", "=", artistId);
  }

  async save(song: Song, artists: Artist[]) {
    return Songs()
      .insert(song)
      .returning("id")
      .then((songId) => {
        artists.forEach(
          async (artist) =>
            await pg("artists_songs").insert({
              song_id: songId[0].id,
              artist_id: artist.id,
            })
        );
      });
  }

  async update(songId: number, song: Song) {
    return Songs().where("id", "=", songId).update(song);
  }

  async delete(songId: number) {
    return Songs().where("id", "=", songId).del();
  }
}

export const songsRepo = new SongsRepo();
