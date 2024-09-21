import { useEffect, useState } from "react"
import { Artist } from "../models/models"
import axios from "axios";
import { updateArtistsStore } from "../store/mobx/updateArtistsStore";

export const useArtists = (name: string = "") => {
    const [artists, setArtists] = useState<Artist[]>([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/artists?name=${name}`).then(res => {
            setArtists(res.data);
        });
    }, [updateArtistsStore.updateArtists]);
    return artists;
}