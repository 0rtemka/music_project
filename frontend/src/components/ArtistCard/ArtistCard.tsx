import { useParams } from 'react-router-dom'
import styles from './ArtistCard.module.css'

export interface ArtistProps {
    name: string,
    profile_cover: string,
    rating: number
}

export default function ArtistCard(props: ArtistProps) {
    const params = useParams();
    console.log(params.slug);

    return (
        <div className={styles.root}>
            <div
                className={styles.card}
                style={{ backgroundImage: `url(${props.profile_cover})` }}
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