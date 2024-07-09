import axios from "axios";
import { useEffect, useState } from "react";

export const useArtistSongs = (artistId: string) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/artists/${artistId}/songs`).then((res) => {
      setSongs(res.data);
    });
  }, []);
  return songs;
};
