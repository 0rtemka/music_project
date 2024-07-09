import { Song } from '../../models/models'
import Card from '../Card/Card'
import styles from './CardsScroll.module.css'

interface CardsScrollProps {
    title: string,
    arr: Song[]
}

export default function CardsScroll(props: CardsScrollProps) {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <span className={styles.title}>{props.title}</span>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        onClick={() => { document.getElementById('scroll')!.scrollLeft -= 500 }}
                    >
                        <img src='/left-arrow.png' className={styles.imgButton} />
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => { document.getElementById('scroll')!.scrollLeft += 500 }}
                    >
                        <img src='/right-arrow.png' className={styles.imgButton} />
                    </button>
                </div>
            </div>
            <div className={styles.scroll} id='scroll'>
                {
                    props.arr.map(song =>
                        <Card key={song.id} song={song}/>
                    )
                }
            </div>
        </div>
    )
}

