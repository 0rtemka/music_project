import { useEffect } from "react"
import { api, API_URL } from "../http";
import { useAppSelector } from "./reduxHooks";
import { useDispatch } from "react-redux";
import { setReview } from "../store/reducers/curUserReviewReducer";

export const useCurUserReview = (songId: string) => {    
    const curUserReview = useAppSelector(state => state.curUserReview.review);
    const dispatch = useDispatch();
    useEffect(() => {
        api.get(`${API_URL}/me/reviews/${songId}`).then((res) => {
            dispatch(setReview(res.data));
        })
    }, [songId]);
    return curUserReview;
}