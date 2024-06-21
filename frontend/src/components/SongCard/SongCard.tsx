import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import RatingItemsList from '../RatingItemsList/RatingItemsList'
import styles from './SongCard.module.css'

interface Song {
    title: string,
    cover: string,
    year: number,
    artist: {
        name: string
    }
    rating: {
        rating: number,
        relevance: number,
        structure: number,
        realization: number,
        lyrics: number,
        beat: number,
    }
}

interface SongCardProps {
    song: Song
}

export default function SongCard({ song }: SongCardProps) {
    return (
        <div className={styles.songCard}>
            <img className={styles.songCover} src={song.cover} alt='song cover'></img>
            <div className={styles.songInfo}>
                <div className={styles.songTitle}>
                    <Link to={`/artists/${song.artist.name}`} className={styles.artistLink}>{song.artist.name}</Link>
                    <span>{song.title}</span>
                    <span>{song.year}</span>
                </div>
                <div className={styles.ratingInfo}>
                    <RatingItemsList items={song.rating}></RatingItemsList>
                    <Rating rating={87} title='Средняя оценка' ></Rating>
                </div>
            </div>
        </div>
    )
}