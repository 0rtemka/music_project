import { Link } from 'react-router-dom';
import SongCover from '../SongCover/SongCover';
import styles from './ReviewCard.module.css'
import ReviewHeader from '../ReviewHeader/ReviewHeader';
import { Review, Song } from '../../models/models';
import { useUser } from '../../hooks/useUser';
import { useAppSelector } from '../../hooks/reduxHooks';

interface ReviewCardProps {
    review: Review;
    song?: Song;
    showCover?: boolean
}

export default function ReviewCard({ review, song, showCover }: ReviewCardProps) {    
    if (!review.rating) return null;
    
    const user = useUser(review.user_id);
    const currentUser = useAppSelector(state => state.user.user);    
    
    return (
        <div className={`${styles.reviewCard} ${currentUser.id == user.id ? styles.cardColor : ''}`}>
            <ReviewHeader props={{ user, review: review, img: '/user.png' }} />
            <div className={styles.reviewContent}>
                <div className={`${styles.reviewText} ${showCover ? styles.withCover : null}`}>
                    <span className={styles.title}>{review.title}</span>
                    <span className={styles.description}>{review.description}</span>
                </div>
                {showCover ?
                    <Link to={`/songs/${song!.id}`} className={styles.song}>
                    <SongCover small={true} cover={{ img: `/images/${song!.cover}`, rating: review.rating.rating, title: 'Рейтинг' }} />
                    <span className={styles.songTitle}>
                        {song!.title}
                    </span>
                </Link>
                :
                    null
                }
            </div>
        </div>
    )
}