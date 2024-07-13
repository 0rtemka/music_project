import axios from "axios";
import { useEffect, useState } from "react";

export const useArtistSongs = (artistId: string, albums : "albums" | "" = "") => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/artists/${artistId}/${albums ? albums : "songs"}`).then((res) => {
      setSongs(res.data);
    });
  }, []);
  return songs;
};
