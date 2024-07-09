import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import RatingItemsList from '../RatingItemsList/RatingItemsList'
import styles from './SongCard.module.css'
import { Song } from '../../models/models'

interface SongCardProps {
    song: Song
}

export default function SongCard({ song }: SongCardProps) { 
    return (
        <div className={styles.songCard}>
            <img className={styles.songCover} src={`/images/${song.cover}`} alt='song cover'></img>
            <div className={styles.songInfo}>
                <div className={styles.songTitle}>
                    <div>
                        {song.artists?.map(artist =>
                            <Link key={artist.id} to={`/artists/${artist.id}`} className={styles.artistLink}>{artist.name}</Link>
                        )}
                    </div>
                    <span>{song.title}</span>
                    <span>{new Date(song.release_date).getFullYear()}</span>
                </div>
                {song.rating &&
                    <div className={styles.ratingInfo}>
                        <RatingItemsList items={song.rating}></RatingItemsList>
                        <Rating rating={song.rating.rating} title='Средняя оценка' ></Rating>
                    </div>
                }
            </div>
        </div>
    )
}