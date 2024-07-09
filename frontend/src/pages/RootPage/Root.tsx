import CardsScroll from '../../components/CardsScroll/CardsScroll';
import { useNewSongs } from '../../hooks/useNewSongs';
import styles from './Root.module.css';

export default function Root() {
    const songs = useNewSongs();
    return (
        <div className={styles.root}>
            <CardsScroll arr={songs} title='Новинки'></CardsScroll>
        </div>
    )
}