import styles from './SongPage.module.css'
import RatingForm from "../../components/RatingForm/RatingForm";
import SongCard from "../../components/SongCard/SongCard";
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import CardsList from '../../components/CardsList/CardsList';

const reviews = [
    { title: 'Флагманский звук', description: 'Определённо один из лучших, если не лучший трек с альбома. Очень крутая  атмосферная работа. Самое главное – вайб не ломается, трек целостный, а  многие другие треки с альбома страдают в этом плане...', cover: '/images/hypochondriac.jpg', song: 'brakence - deepfake', relevance: 4, lyrics: 5, beat: 5, structure: 5, realization: 5, rating: 86 },
    { title: 'Атмосферно', description: 'Атмосферный семпл из старого хита артиста vertigo создает прекрасную  атмосферу, которая дополняется харизмой и эмоциональным исполнением  артиста. Бит не типичный, есть разнообразие, выполнен в стиле Brakence и  также в припеве имеются отсылку на один из его треков...', cover: '/images/astrid.jpg', song: 'glaive - astrid', relevance: 4, lyrics: 5, beat: 5, structure: 5, realization: 5, rating: 86 },
]

const song = {
    title: 'deepfake', artist: { name: 'brakence' }, year: 2022, cover: '/images/hypochondriac.jpg',
    rating: { rating: 86, relevance: 1, structure: 2, realization: 3, lyrics: 4, beat: 5 }
}

export default function SongPage() {
    return (
        <div className={styles.songPage}>
            <SongCard song={song}></SongCard>
            <RatingForm />
            <CardsList title="Рецензии пользователей">
                {reviews.map(review =>
                    <ReviewCard review={review} />
                )}
            </CardsList>
        </div>
    )
}