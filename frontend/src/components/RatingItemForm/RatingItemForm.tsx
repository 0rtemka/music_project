import styles from './RatingItemForm.module.css'

interface RatingItemProps {
    title: string
}

export default function RatingItemForm({title}: RatingItemProps) {
    return (
        <div className={styles.itemsForm}>
            <span className={styles.itemTitle}>{title}</span>
            <input className={styles.itemInput} type='text' defaultValue={3} maxLength={1}></input>
        </div>
    )
}