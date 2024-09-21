import { action, makeObservable, observable } from "mobx";
import { Review } from "../../models/models";

class CurUserReviewStore {
    review = {} as Review;

    constructor() {
        makeObservable(this, {
            review: observable,
            setReview: action,
        })
    }

    setReview(review: Review) {
        this.review = review;
    }
}

export const curUserReviewStore = new CurUserReviewStore();