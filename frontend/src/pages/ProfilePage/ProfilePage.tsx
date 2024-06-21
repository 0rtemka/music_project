import CardsList from "../../components/CardsList/CardsList";
import ProfileCard, { UserInfo } from "../../components/ProfileCard/ProfileCard";
import ReviewCard, { Review } from "../../components/ReviewCard/ReviewCard";

const userInfo: UserInfo = { name: 'username', registrationDate: new Date(Date.now()), reviewsCount: 2, profileImg: '/user.png' }
const reviews: Review[] = [
    { title: 'Флагманский звук', description: 'Определённо один из лучших, если не лучший трек с альбома. Очень крутая  атмосферная работа. Самое главное – вайб не ломается, трек целостный, а  многие другие треки с альбома страдают в этом плане...', cover: '/images/hypochondriac.jpg', song: 'brakence - deepfake', relevance: 4, lyrics: 5, beat: 5, structure: 5, realization: 5, rating: 86 },
    { title: 'Атмосферно', description: 'Атмосферный семпл из старого хита артиста vertigo создает прекрасную  атмосферу, которая дополняется харизмой и эмоциональным исполнением  артиста. Бит не типичный, есть разнообразие, выполнен в стиле Brakence и  также в припеве имеются отсылку на один из его треков...', cover: '/images/astrid.jpg', song: 'glaive - astrid', relevance: 4, lyrics: 5, beat: 5, structure: 5, realization: 5, rating: 86 },
]

export default function ProfilePage() {
    return (
        <>
            <ProfileCard userInfo={userInfo} />
            <CardsList title="Мои рецензии">
                {reviews.map(review =>
                    <ReviewCard review={review} />
                )}
            </CardsList>
        </>
    )
}