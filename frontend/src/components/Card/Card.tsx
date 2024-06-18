import { Link } from 'react-router-dom'
import styles from './Card.module.css'

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
            <img className={styles.cardImg} src={props.img} alt={props.alt} />
            <div className={styles.rating}>
                <div className={styles.text}>
                    <span className={styles.ratingValue}>{props.rating}</span>
                    <span className={styles.ratingText}>РЕЙТИНГ</span>
                </div>
            </div>
            <Link to={`/artists/${props.artist_slug}`} className={styles.title}>
                    {props.artist}
            </Link>
            <span className={styles.description}>{props.song}</span>
        </div >
    )
}