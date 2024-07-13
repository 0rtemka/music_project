import { useParams } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import CardsScroll from "../../components/CardsScroll/CardsScroll";
import { useArtist } from "../../hooks/useArtist";
import { useArtistSongs } from "../../hooks/useArtistSongs";
import { Artist, Song } from "../../models/models";
import ErrorPage from "../NotFoundPage/NotFoundPage";


export default function ArtistPage() {
    const { artistId } = useParams();
    const artist: Artist = useArtist(artistId!);
    const songs: Song[] = useArtistSongs(artistId!);
    const albums: Song[] = useArtistSongs(artistId!, "albums");

    if (!artist.id) {
        return <ErrorPage />
    }

    return (
        <div style={{ marginTop: "100px", display: "flex", flexDirection: "column", gap: "50px" }}>
            <ArtistCard name={artist.name} cover={artist.cover} rating={artist.rating} />
            {songs.length != 0 ?
                <CardsScroll songs={songs} title='Песни'></CardsScroll>
                : null
            }
            {albums.length != 0 ?
                <CardsScroll songs={albums} title='Альбомы'></CardsScroll>
                : null
            }
        </div>
    )
}