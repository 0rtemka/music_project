import { Link } from "react-router-dom";
import { Artist } from "../../models/models";
import styles from "./ArtistSearchCard.module.css";

interface ArtistSearchCardProps {
    artist: Artist,
    file?: ArrayBuffer | string
}

export function ArtistSearchCard({artist, file}: ArtistSearchCardProps) {
    return (
        <Link to={`/artists/${artist.id}`} className={styles.artistSearchCard}>
            <div 
                className={styles.artistImg} 
                style={{ backgroundImage: file ? `url(${file})` : `url(/images/${artist.mini_cover})` }}></div>
            <span className={styles.artistName}>{artist.name}</span>
        </Link>
    )
}