import { ApiError } from "../errors/errorRequest";
import { ReviewRating } from "../models/Rating";
import { SongReview } from "../models/Review";
import { User } from "../models/User";
import { songsReviewsRepo } from "../repos/songsReviewsRepo";

class SongsReviewsService {
  async getAll() {
    return await songsReviewsRepo.findAll();
  }

  async getAllByUser(userId: number) {
    return await songsReviewsRepo.findByUserId(userId);
  }

  async getByUserAndSong(userId: number, songId: number) {
    return await songsReviewsRepo.findByUserAndSong(userId, songId);
  }

  async getAllBySong(songId: number) {
    return await songsReviewsRepo.findBySongId(songId);
  }

  async add(review: SongReview, user: User) {
    const userReview = await this.getByUserAndSong(user.id!, review.song_id);
    if (userReview) {
        throw ApiError.badRequest("Пользователь уже опубликовал рецензию")
    }

    const reviewToSave: SongReview = {
      description: review.description,
      title: review.title,
      issued_at: new Date(Date.now()),
      user_id: user.id!,
      song_id: review.song_id
    };

    const savedReview: SongReview = (await songsReviewsRepo.save(reviewToSave))[0];

    const rating = review.rating!;

    const ratingToSave: ReviewRating = {
      ...review.rating!,
      review_id: savedReview.id!,
      rating: (rating.realization + rating.relevance + rating.beat + rating.structure + rating.lyrics) * 2
    };

    const savedRating = (await songsReviewsRepo.saveReviewRating(ratingToSave))[0];
    
    return {...savedReview, rating: savedRating};
  }

  async update(reviewId: number, review: SongReview) {
    await songsReviewsRepo.update(reviewId, review);
  }

  async delete(reviewId: number) {
    await songsReviewsRepo.delete(reviewId);
  }
}

export const songsReviewsService = new SongsReviewsService();
