import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import SongCover from '../SongCover/SongCover'
import { Song } from '../../models/models'

type CardProps = {
    song: Song
}

export default function Card({song}: CardProps) {
    return (
        <div className={styles.card}>
            <SongCover small={false} cover={{ img: `/images/${song.cover}`, rating: song.rating?.rating!, title: 'Рейтинг' }} />
            <div>
                {song.artists?.map(artist =>
                    <Link key={artist.id} to={`/artists/${artist.id}`} className={styles.title}>
                        {artist.name}
                    </Link>
                )}
            </div>
            <Link to={`/songs/${song.id}`} className={styles.description}>{song.title}</Link>
        </div>
    )
}