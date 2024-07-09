import { useParams } from 'react-router-dom'
import styles from './ArtistCard.module.css'

export interface Artist {
    name: string,
    cover: string,
    rating: number,
    file?: string | ArrayBuffer
}

export default function ArtistCard(props: Artist) {
    return (
        <div className={styles.root}>
            <div
                className={styles.card}
                style={{ backgroundImage: `url(${props.file ? props.file : `/images/${props.cover}`}` }}
            >
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.rating}>
                    <div className={styles.ratingValue}>
                        {props.rating}
                    </div>
                    <span className={styles.ratingText}>Средний рейтинг</span>
                </div>
            </div>
        </div>
    )
}