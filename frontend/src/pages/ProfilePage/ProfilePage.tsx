import styles from './ProfilePage.module.css'
import CardsList from "../../components/CardsList/CardsList";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useUserReviews } from '../../hooks/useUserReviews';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function ProfilePage() {
    const { isAuth } = useAppSelector(state => state.user)
    const { userId } = useParams();
    const { user, reviews } = useUserReviews(userId);
    const navigate = useNavigate();

    if (!userId && !isAuth) {
        navigate("/login")
    }

    return (
        <div className={styles.profilePage}>
            <ProfileCard user={user} />
            {reviews.length > 0 ?
                <CardsList title={userId ? "Рецензии пользователя" : "Мои рецензии"}>
                    {reviews.map(review =>
                        <ReviewCard key={review.id} song={review.song!} review={review} showCover={true} />
                    )}
                </CardsList>
                :
                null
            }

        </div>
    )
}