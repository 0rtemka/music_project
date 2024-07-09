import styles from './SongPage.module.css'
import RatingForm from "../../components/RatingForm/RatingForm";
import SongCard from "../../components/SongCard/SongCard";
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import CardsList from '../../components/CardsList/CardsList';
import { useSong } from '../../hooks/useSong';
import { useParams } from 'react-router-dom';
import { Song } from '../../models/models';
import { useReviews } from '../../hooks/useReviews';
import { useAppSelector } from '../../hooks/reduxHooks';
import { NeedAuthCard } from '../../components/NeedAuthCard/NeedAuthCard';
import { useCurUserReview } from '../../hooks/useCurUserReview';
import RatingFormBody from '../../components/RatingFormBody/RatingFormBody';

export default function SongPage() {
    const { user, isAuth } = useAppSelector(state => state.user)
    const { songId } = useParams();
    const song: Song = useSong(songId!);
    const curUserReview = useCurUserReview(songId!);
    const reviews = useReviews(songId!).filter(review => review.user_id !== user.id);


    return (
        <div className={styles.songPage}>
            <SongCard song={song}></SongCard>
            {isAuth ?
                curUserReview ?
                    <CardsList title='Ваша рецензия'>
                        <ReviewCard review={curUserReview}></ReviewCard>
                    </CardsList>
                    :
                    <RatingFormBody />
                :
                <NeedAuthCard />
            }
            {reviews.length != 0 ?
                <CardsList title="Рецензии пользователей">
                    {reviews.map(review =>
                        <ReviewCard key={review.id} review={review} />
                    )}
                </CardsList> :
                null
            }

        </div>
    )
}