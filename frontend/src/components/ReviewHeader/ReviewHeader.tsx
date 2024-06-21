import Rating from '../Rating/Rating'
import styles from './ReviewHeader.module.css'

interface ReviewHeader {
    img: string,
    username: string,
    reviewDate: string,
}

interface ReviewHeaderProps {
    review: ReviewHeader
}

export default function ReviewHeader({ review }: ReviewHeaderProps) {
    return (
        <div className={styles.reviewHeader}>
            <div className={styles.reviewContent}>
                <img className={styles.userIcon} src={review.img}></img>
                <div className={styles.reviewInfo}>
                    <span className={styles.username}>{review.username}</span>
                    <span className={styles.reviewDate}>{review.reviewDate}</span>
                </div>
            </div>
            <Rating rating={78} />
        </div>
    )
}