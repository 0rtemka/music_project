import axios from "axios";
import { useEffect, useState } from "react";

export const useSongs = (filter: 'latest' | 'top' | '' = "") => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${filter}`).then((songs) => {
      setSongs(songs.data);
    });
  }, []);
  return songs;
};
