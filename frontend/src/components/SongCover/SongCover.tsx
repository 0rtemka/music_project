import styles from './SongCover.module.css'

interface SongCover {
    img: string,
    rating: number,
    title: string
}

interface SongCoverProps {
    cover: SongCover,
    small: boolean
}

const smallClass = (isSmall: boolean): string => isSmall ? styles.small : '';

export default function SongCover({cover, small}: SongCoverProps) {
    return (
        <div className={`${styles.songCover} ${smallClass(small)}`}>
            <img className={`${styles.cardImg} ${smallClass(small)}`} src={cover.img} alt='song cover' />
            <div className={`${styles.rating} ${smallClass(small)}`}>
                <div className={styles.text}>
                    <span className={small ? styles.ratingValueSmall : styles.ratingValue}>{cover.rating}</span>
                    <span className={small ? styles.ratingTextSmall : styles.ratingText}>{cover.title}</span>
                </div>
            </div>
        </div>
    )
}