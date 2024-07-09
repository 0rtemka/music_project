import { RatingItemsProps } from '../RatingItemsCard.tsx/RatingItemsCard'
import styles from './RatingItemsList.module.css'

export default function RatingItemsList({ items }: RatingItemsProps) {
    return (
        <div className={styles.itemsList}>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Актуальность: </span>
                <span className={`${styles.itemValue} ${styles.relevance}`}>{items.relevance.toFixed(1)}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Рифмы и образы: </span>
                <span className={`${styles.itemValue} ${styles.structure}`}>{items.structure.toFixed(1)}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Харизма: </span>
                <span className={`${styles.itemValue} ${styles.realization}`}>{items.realization.toFixed(1)}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Структура: </span>
                <span className={`${styles.itemValue} ${styles.lyrics}`}>{items.lyrics.toFixed(1)}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Бит: </span>
                <span className={`${styles.itemValue} ${styles.beat}`}>{items.beat.toFixed(1)}</span>
            </div>
        </div>
    )
}