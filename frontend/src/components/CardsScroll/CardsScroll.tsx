import { Artist, Song } from '../../models/models'
import { ArtistSearchCard } from '../ArtistSearchCard/ArtistSearchCard'
import Card from '../Card/Card'
import styles from './CardsScroll.module.css'

interface CardsScrollProps {
    title: string,
    songs?: Song[]
    artists?: Artist[]
}

export default function CardsScroll(props: CardsScrollProps) {
    const uuid = crypto.randomUUID();

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <span className={styles.title}>{props.title}</span>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        onClick={() => { document.getElementById(`scroll-${uuid}`)!.scrollLeft -= 500 }}
                    >
                        <img src='/left-arrow.png' className={styles.imgButton} />
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => { document.getElementById(`scroll-${uuid}`)!.scrollLeft += 500 }}
                    >
                        <img src='/right-arrow.png' className={styles.imgButton} />
                    </button>
                </div>
            </div>
            <div className={styles.scroll} id={`scroll-${uuid}`}>
                {
                    props.songs ?
                        props.songs!.map(song => 
                            <Card key={song.id} song={song} />
                        )
                    : null
                }
                {
                    props.artists ?
                        props.artists!.map(artist => 
                            <ArtistSearchCard key={artist.id} artist={artist} />
                        ) 
                    : null
                }
            </div>
        </div>
    )
}

