import axios from "axios";
import { API_URL } from "../http";
import { useEffect, useState } from "react";
import { Review } from "../models/models";
import { curUserReviewStore } from "../store/mobx/curUserReviewStore";

export const useReviews = (songId: string) => {    
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    axios.get(`${API_URL}/songs/${songId}/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, [songId, curUserReviewStore.review]);

  return reviews;
};
