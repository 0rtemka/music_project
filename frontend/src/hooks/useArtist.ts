import axios from "axios";
import { useEffect, useState } from "react"
import { Artist } from "../models/models";

export const useArtist = (artistId: string) => {
    const [artist, setArtist] = useState({} as Artist);
    useEffect(() => {
        axios.get(`http://localhost:5000/artists/${artistId}`).then((res) =>
            setArtist(res.data)
        )
    }, []);
    return artist;
}