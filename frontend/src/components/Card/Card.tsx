import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import SongCover from '../SongCover/SongCover'

export type CardProps = {
    img: string,
    alt: string,
    artist: string,
    song: string,
    rating: number,
    artist_slug: string
}

export default function Card(props: CardProps) {   
    return (
        <div className={styles.card}>
            <SongCover small={false} cover={{img: props.img, rating: props.rating, title: 'Рейтинг'}} />
            <Link to={`/artists/${props.artist_slug}`} className={styles.title}>
                    {props.artist}
            </Link>
            <span className={styles.description}>{props.song}</span>
        </div>
    )
}