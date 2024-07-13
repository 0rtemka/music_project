import { RatingItemsProps } from '../RatingItemsCard.tsx/RatingItemsCard'
import styles from './RatingItemsList.module.css'

export default function RatingItemsList({ items }: RatingItemsProps) {
    return (
        <div className={styles.itemsList}>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Актуальность: </span>
                <span className={`${styles.itemValue} ${styles.relevance}`}>{items.relevance}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Рифмы и образы: </span>
                <span className={`${styles.itemValue} ${styles.structure}`}>{items.structure}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Харизма: </span>
                <span className={`${styles.itemValue} ${styles.realization}`}>{items.realization}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Структура: </span>
                <span className={`${styles.itemValue} ${styles.lyrics}`}>{items.lyrics}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Бит: </span>
                <span className={`${styles.itemValue} ${styles.beat}`}>{items.beat}</span>
            </div>
        </div>
    )
}