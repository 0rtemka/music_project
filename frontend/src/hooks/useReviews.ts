import axios from "axios";
import { API_URL } from "../http";
import { useEffect, useState } from "react";
import { Review } from "../models/models";
import { useAppSelector } from "./reduxHooks";

export const useReviews = (songId: string) => {    
  const curUserReview = useAppSelector(state => state.curUserReview.review)
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    axios.get(`${API_URL}/songs/${songId}/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, [songId, curUserReview]);

  return reviews;
};
