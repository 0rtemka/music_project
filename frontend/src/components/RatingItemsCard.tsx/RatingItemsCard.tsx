import styles from './RatingItemsCard.module.css'

export interface RatingItems {
    relevance: number,
    structure: number,
    realization: number,
    lyrics: number,
    beat: number
}

export interface RatingItemsProps {
    items: RatingItems
}

const itemsElement: RatingItems = {relevance: 0, structure: 0, realization: 0, lyrics: 0, beat: 0}

export default function RatingItemsCard({items}: RatingItemsProps) {
    return (
        <div className={styles.items}>
            {Object.keys(itemsElement).map(key => 
                <span className={`${styles[key]} ${styles.item}`}>{items[key as keyof RatingItems]}</span>
            )}
        </div>
    )
}