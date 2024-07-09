import { pg } from "../db/connect";
import { ReviewRating } from "../models/Rating";
import { SongReview } from "../models/Review";

const SongsReviews = () => pg<SongReview>("songs_reviews");
const ReviewsRating = () => pg<ReviewRating>("reviews_rating");

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
        ),
        pg.raw(
          `json_build_object('id', reviews_rating.review_id, 'rating', reviews_rating.rating, 'relevance', reviews_rating.relevance,
          'structure', reviews_rating.structure, 'realization', reviews_rating.realization,
          'lyrics', reviews_rating.lyrics, 'beat', reviews_rating.beat) as rating`
        )
      )
      .join("songs", "songs.id", "=", "songs_reviews.song_id")
      .join("artists_songs", "artists_songs.song_id", "=", "songs.id")
      .join("artists", "artists.id", "=", "artists_songs.artist_id")
      .join(
        "reviews_rating",
        "reviews_rating.review_id",
        "=",
        "songs_reviews.id"
      )
      .groupBy("songs_reviews.id", "songs.id", "reviews_rating.review_id")
      .where("user_id", "=", userId);
  }

  async findBySongId(songId: number) {
    return SongsReviews()
      .select(
        "songs_reviews.*",
        pg.raw(
          `json_build_object('rating', reviews_rating.rating, 'relevance', reviews_rating.relevance,
          'structure', reviews_rating.structure, 'realization', reviews_rating.realization,
          'lyrics', reviews_rating.lyrics, 'beat', reviews_rating.beat) as rating`
        )
      )
      .join(
        "reviews_rating",
        "reviews_rating.review_id",
        "=",
        "songs_reviews.id"
      )
      .where("song_id", "=", songId);
  }

  async findByUserAndSong(userId: number, songId: number) {
    return SongsReviews()
      .select(
        "songs_reviews.*",
        pg.raw(
          `json_build_object('rating', reviews_rating.rating, 'relevance', reviews_rating.relevance,
        'structure', reviews_rating.structure, 'realization', reviews_rating.realization,
        'lyrics', reviews_rating.lyrics, 'beat', reviews_rating.beat) as rating`
        )
      )
      .join(
        "reviews_rating", "reviews_rating.review_id", "=", "songs_reviews.id"
      )
      .where("song_id", "=", songId)
      .where("user_id", "=", userId)
      .first();
  }

  async save(review: SongReview) {
    return SongsReviews().insert(review).returning("*");
  }

  async saveReviewRating(rating: ReviewRating) {
    return ReviewsRating().insert(rating).returning("*");
  }

  async update(reviewId: number, review: SongReview) {
    return SongsReviews().where("id", "=", reviewId).update(review);
  }

  async delete(reviewId: number) {
    return SongsReviews().where("id", "=", reviewId).del();
  }
}

export const songsReviewsRepo = new SongsReviewsRepo();
