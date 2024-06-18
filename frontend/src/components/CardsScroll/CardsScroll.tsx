import Card, { CardProps } from '../Card/Card'
import styles from './CardsScroll.module.css'

interface CardsScrollProps {
    title: string,
    arr: CardProps[]
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
                        <Card
                            img={song.img}
                            alt={song.alt}
                            artist={song.artist}
                            song={song.song}
                            rating={song.rating}
                            artist_slug={song.artist_slug}
                        >
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

