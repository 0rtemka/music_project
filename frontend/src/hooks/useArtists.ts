import { useEffect, useState } from "react"
import { Artist } from "../models/models"
import axios from "axios";

export const useArtists = (name: string = "") => {
    const [artists, setArtists] = useState<Artist[]>([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/artists?name=${name}`).then(res => {
            setArtists(res.data);
        });
    }, []);
    return artists;
}