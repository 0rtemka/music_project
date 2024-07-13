import axios from "axios";
import { useEffect, useState } from "react";

export const useAlbums = (filter: 'latest' | 'top' | '' = "") => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/albums/${filter}`).then((albums) => {
      setAlbums(albums.data);
    });
  }, []);
  return albums;
};
