import { pg } from "../db/connect";
import { SongReview } from "../models/Review";

const SongsReviews = () => pg<SongReview>("songs_reviews");

class SongsReviewsRepo {
  async findAll() {
    return SongsReviews()
      .select(
        "songs_reviews.*",
        pg.raw(
          "json_build_object('id', songs.id, 'title', songs.title, 'cover', songs.cover) as song"
        )
      )
      .join("songs", "songs.id", "=", "songs_reviews.song_id")
      .groupBy("songs_reviews.id", "songs.id");
  }

  async findByUserId(userId: number) {
    return SongsReviews()
      .select(
        "songs_reviews.*",
        pg.raw(
          "json_build_object('id', songs.id, 'title', songs.title, 'cover', songs.cover, 'artists', json_agg(artists.*)) as song"
        )
      )
      .join("songs", "songs.id", "=", "songs_reviews.song_id")
      .join("artists_songs", "artists_songs.song_id", "=", "songs.id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .groupBy("songs_reviews.id", "songs.id")
      .where("user_id", "=", userId);
  }

  async findBySongId(songId: number) {
    return SongsReviews().where("song_id", "=", songId);
  }

  async save(review: SongReview) {
    return SongsReviews().insert(review).returning("*");
  }

  async update(reviewId: number, review: SongReview) {
    return SongsReviews().where("id", "=", reviewId).update(review);
  }

  async delete(reviewId: number) {
    return SongsReviews().where("id", "=", reviewId).del();
  }
}

export const songsReviewsRepo = new SongsReviewsRepo();
