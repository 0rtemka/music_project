import { Link } from 'react-router-dom';
import SongCover from '../SongCover/SongCover';
import styles from './ReviewCard.module.css'
import ReviewHeader from '../ReviewHeader/ReviewHeader';

export interface Review {
    title: string,
    description: string,
    cover: string,
    song: string,
    relevance: number,
    lyrics: number,
    structure: number,
    beat: number,
    realization: number,
    rating: number
}

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className={styles.reviewCard}>
            <ReviewHeader review={{ img: '/user.png', username: 'username', reviewDate: new Date(Date.now()).toLocaleDateString() }} />
            <div className={styles.reviewContent}>
                <div className={styles.reviewText}>
                    <span className={styles.title}>{review.title}</span>
                    <span className={styles.description}>{review.description}</span>
                </div>
                <div className={styles.song}>
                    <SongCover small={true} cover={{ img: review.cover, rating: review.rating, title: 'Рейтинг' }} />
                    <Link to={`/`} className={styles.songTitle}>
                        {review.song}
                    </Link>
                </div>
            </div>
        </div>
    )
}