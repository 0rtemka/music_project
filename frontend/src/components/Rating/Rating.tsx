import styles from './Rating.module.css'

interface RatingProps {
    rating: number,
    title?: string
}

export default function Rating({rating, title}: RatingProps) {
    return (
        <div className={styles.rating}>
            <span className={styles.ratingValue}>{rating}</span>
            <span className={styles.ratingTitle}>{title}</span>
        </div>
    )
}