import axios from "axios";
import { useEffect, useState } from "react";
import { Song } from "../models/models";
import { curUserReviewStore } from "../store/mobx/curUserReviewStore";

export const useSong = (songId: string) => {
  const [song, setSong] = useState({} as Song);
  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${songId}`).then((res) => {
      setSong(res.data);
    });
  }, [curUserReviewStore.review]);
  return song;
};
