import CardsScroll from '../../components/CardsScroll/CardsScroll';
import { useAlbums } from '../../hooks/useAlbums';
import { useSongs } from '../../hooks/useSongs';
import styles from './Root.module.css';

export default function Root() {
    const newSongs = useSongs("latest");
    const newAlbums = useAlbums("latest");
    const topSongs = useSongs("top");
    const topAlbums = useAlbums("top");
    return (
        <div className={styles.root}>
            {newSongs.length != 0 ?
                <CardsScroll songs={newSongs} title='Новые песни'></CardsScroll>
                : null
            }
            {newAlbums.length != 0 ?
                <CardsScroll songs={newAlbums} title='Новые альбомы'></CardsScroll>
                : null
            }
            {topSongs.length != 0 ?
                <CardsScroll songs={topSongs} title='Лучшие песни'></CardsScroll>
                : null
            }
            {topAlbums.length != 0 ?
                <CardsScroll songs={topAlbums} title='Лучшие альбомы'></CardsScroll>
                : null
            }
        </div>
    )
}