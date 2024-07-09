import { pg } from "../db/connect";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";

const Songs = () => pg<Song>("songs");

class SongsRepo {
  async findAll() {
    return Songs()
      .select(
        "songs.*",
        pg.raw("(json_agg(artists.*)) as artists"),
        pg.raw(
          `json_build_object('id', songs_rating.song_id, 'rating', songs_rating.rating, 'relevance', songs_rating.relevance,
          'structure', songs_rating.structure, 'realization', songs_rating.realization, 'lyrics', songs_rating.lyrics,
          'beat', songs_rating.beat) as rating`
        )
      )
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .join("songs_rating", "songs_rating.song_id", "=", "songs.id")
      .groupBy("songs.id", "songs_rating.song_id");
  }

  async findAlbums() {
    return Songs()
      .select(
        "songs.*",
        pg.raw("(json_agg(artists.*)) as artists"),
        pg.raw(
          `json_build_object('id', songs_rating.song_id, 'rating', songs_rating.rating, 'relevance', songs_rating.relevance,
          'structure', songs_rating.structure, 'realization', songs_rating.realization, 'lyrics', songs_rating.lyrics,
          'beat', songs_rating.beat) as rating`
        )
      )
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .join("songs_rating", "songs_rating.song_id", "=", "songs.id")
      .where("is_album", "=", "true")
      .groupBy("songs.id", "songs_rating.song_id");
  }

  async findById(songId: number) {
    return Songs()
      .select(
        "songs.*",
        pg.raw("(json_agg(artists.*)) as artists"),
        pg.raw(
          `json_build_object('id', songs_rating.song_id, 'rating', songs_rating.rating, 'relevance', songs_rating.relevance,
          'structure', songs_rating.structure, 'realization', songs_rating.realization, 'lyrics', songs_rating.lyrics,
          'beat', songs_rating.beat) as rating`
        )
      )
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .join("songs_rating", "songs_rating.song_id", "=", "songs.id")
      .where("songs.id", songId)
      .groupBy("songs.id", "songs_rating.song_id")
      .first();
  }

  async findByArtistId(artistId: number) {
    return Songs()
      .select(
        "songs.*",
        pg.raw(
          `json_build_object('id', songs_rating.song_id, 'rating', songs_rating.rating, 'relevance', songs_rating.relevance,
          'structure', songs_rating.structure, 'realization', songs_rating.realization, 'lyrics', songs_rating.lyrics,
          'beat', songs_rating.beat) as rating`
        )
      )
      .join("artists_songs", "songs.id", "=", "artists_songs.song_id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .join("songs_rating", "songs_rating.song_id", "=", "songs.id")
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
