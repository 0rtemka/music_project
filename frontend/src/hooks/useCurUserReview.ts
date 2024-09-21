import { useEffect } from "react"
import { api, API_URL } from "../http";
import { curUserReviewStore } from "../store/mobx/curUserReviewStore";


const useCurUserReview = (songId: string) => { 
    useEffect(() => {
        api.get(`${API_URL}/me/reviews/${songId}`).then((res) => {
            curUserReviewStore.setReview(res.data);
        })
    }, [songId]);
    return curUserReviewStore.review;
}

export default useCurUserReview;