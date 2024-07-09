import axios from "axios";
import { useEffect, useState } from "react";

export const useNewSongs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/songs").then((songs) => {
      console.log(songs);
      setSongs(songs.data);
    });
  }, []);
  return songs;
};
