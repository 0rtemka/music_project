import axios from "axios";
import { useEffect, useState } from "react"

export const useArtist = (artistId: string) => {
    const [artist, setArtist] = useState({name: "", cover: "", rating: 0});
    useEffect(() => {
        axios.get(`http://localhost:5000/artists/${artistId}`).then((artist) =>
            setArtist(artist.data)
        )
    }, []);
    return artist;
}