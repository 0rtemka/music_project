import { NextFunction, Request, Response } from "express";
import { songsReviewsService } from "../../services/songsReviewsService";
import { SongReview } from "../../models/Review";

class SongsReviewsController {
    getAllByCurrentUser(req: Request, res: Response, next: NextFunction) {
        const user = req.user!;

        songsReviewsService.getAllByUser(user.id!).then(reviews => {
            res.send(reviews);
        }).catch(err => {
            next(err);
        })
    }

    getAllByUser(req: Request, res: Response, next: NextFunction) {
        const userId = parseInt(req.params.userId);

        songsReviewsService.getAllByUser(userId).then(reviews => {            
            res.send(reviews);
        }).catch(err => {
            console.log(err);
            next(err);
        })
    }

    getAllBySong(req: Request, res: Response, next: NextFunction) {
        const songId = parseInt(req.params.songId);

        songsReviewsService.getAllBySong(songId).then(reviews => {
            res.send(reviews);
        }).catch(err => {
            next(err);
        })
    }

    addReview(req: Request, res: Response, next: NextFunction) {
        const user = req.user!;
        const review: SongReview = req.body;        

        songsReviewsService.add(review, user).then(() => {            
            res.send();
        }).catch(err => {
            next(err);
        })
    }
}

export const songsReviewsController = new SongsReviewsController();