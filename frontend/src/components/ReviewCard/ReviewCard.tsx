import { Link } from 'react-router-dom';
import SongCover from '../SongCover/SongCover';
import styles from './ReviewCard.module.css'
import ReviewHeader from '../ReviewHeader/ReviewHeader';
import { Review, Song } from '../../models/models';
import { useUser } from '../../hooks/useUser';
import { observer } from 'mobx-react-lite';
import { userDataStore } from '../../store/mobx/userDataStore';

interface ReviewCardProps {
    review: Review;
    song?: Song;
    showCover?: boolean
}

const  ReviewCard = observer(({ review, song, showCover }: ReviewCardProps) => {
    const user = useUser(review.user_id);

    if (!review.rating) return null;

    return (
        <div className={`${styles.reviewCard} ${userDataStore.user.id == user.id ? styles.cardColor : ''}`}>
            <ReviewHeader props={{ user, review: review, img: '/user.png' }} />
            <div className={styles.reviewContent}>
                <div className={`${styles.reviewText} ${showCover ? styles.withCover : null}`}>
                    <span className={styles.title}>{review.title}</span>
                    <span className={styles.description}>{review.description}</span>
                </div>
                {showCover ?
                    <Link to={`/songs/${song!.id}`} className={styles.song}>
                        <SongCover small={true} cover={{ img: `/images/${song!.cover}`, rating: review.rating, title: 'Рейтинг' }} />
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
})

export default ReviewCard;