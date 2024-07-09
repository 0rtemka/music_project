import { api, API_URL } from "../http"
import { useEffect, useState } from "react"
import { Review, User } from "../models/models"
import { useAppSelector } from "./reduxHooks";

export const useUserReviews = (userId?: string) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const currentUser = useAppSelector(state => state.user.user);
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        if (userId) {
            api.get(`/users/${userId}`).then((res) => {
                setUser(res.data);
            });
            api.get(`${API_URL}/users/${userId}/reviews`).then(res => {
                setReviews(res.data);
            });
        } else {
            setReviews([]);
            setUser(currentUser);
            api.get(`${API_URL}/me/reviews`).then(res => {
                setReviews(res.data);
            });
        }
    }, [userId]);
    return {user, reviews};   
}