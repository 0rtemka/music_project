import { SongReview } from "../models/Review";
import { Song } from "../models/Song";
import { User } from "../models/User";
import { songsReviewsRepo } from "../repos/songsReviewsRepo";
import { songsService } from "./songsService";

class SongsReviewsService {
    async getAll() {
        return await songsReviewsRepo.findAll();
    }

    async getAllByUser(userId: number) {
        return await songsReviewsRepo.findByUserId(userId);
    }

    async getAllBySong(songId: number) {
        return await songsReviewsRepo.findBySongId(songId);
    }

    async add(review: SongReview, user: User) {
        review.user_id = user.id!;
        review.issued_at = new Date(Date.now());
        await songsReviewsRepo.save(review);
    }

    async update(reviewId: number, review: SongReview) {
        await songsReviewsRepo.update(reviewId, review);
    }

    async delete(reviewId: number) {
        await songsReviewsRepo.delete(reviewId);
    }
}

export const songsReviewsService = new SongsReviewsService();