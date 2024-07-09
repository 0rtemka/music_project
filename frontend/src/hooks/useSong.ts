import axios from "axios";
import { useEffect, useState } from "react";
import { Song } from "../models/models";
import { useAppSelector } from "./reduxHooks";

export const useSong = (songId: string) => {    
  const [song, setSong] = useState({} as Song);
  const curUserReview = useAppSelector(state => state.curUserReview.review);
  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${songId}`).then((res) => {
      setSong(res.data);
    });
  }, [curUserReview]);
  return song;
};
