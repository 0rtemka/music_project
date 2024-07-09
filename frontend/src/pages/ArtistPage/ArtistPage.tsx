import { useParams } from "react-router-dom";
import ArtistCard, { Artist } from "../../components/ArtistCard/ArtistCard";
import CardsScroll from "../../components/CardsScroll/CardsScroll";
import { useArtist } from "../../hooks/useArtist";
import { useArtistSongs } from "../../hooks/useArtistSongs";
import { Song } from "../../models/models";


export default function ArtistPage() {
    const { artistId } = useParams();
    const artist: Artist = useArtist(artistId!);
    const songs: Song[] = useArtistSongs(artistId!);

    return (
        <div style={{marginTop: "100px", display: "flex", flexDirection: "column", gap: "50px"}}>
            <ArtistCard name={artist.name} cover={artist.cover} rating={0} />
            <CardsScroll arr={songs} title='Популярное'></CardsScroll>
        </div>
    )
}