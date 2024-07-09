import { Children, PropsWithChildren } from 'react'
import styles from './RatingItemForm.module.css'

interface RatingItemProps {
    title: string,
}

export default function RatingItemForm(item: PropsWithChildren<RatingItemProps>) {
    return (
        <div className={styles.itemsForm}>
            <span className={styles.itemTitle}>{item.title}</span>
            <input className={styles.itemInput} type='text' maxLength={1}></input>
        </div>
    )
}