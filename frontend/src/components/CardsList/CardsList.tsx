import { PropsWithChildren } from 'react'
import styles from './CardsList.module.css'

interface CardsListProps {
    title: string
}

export default function CardsList(props: PropsWithChildren<CardsListProps>) {
    return (
        <>
            <div className={styles.listTitle}>
                {props.title}
            </div>
            <div className={styles.cardsList}>
                {props.children}
            </div>
        </>
    )

}