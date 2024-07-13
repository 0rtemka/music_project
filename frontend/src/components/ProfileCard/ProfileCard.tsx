import { User } from '../../models/models'
import styles from './ProfileCard.module.css'

interface ProfileCardProps {
    user: User
}

export default function ProfileCard({ user }: ProfileCardProps) {    
    return (
        <div className={styles.card}>
            <img className={styles.icon} src={'/user.png'} alt='profile image'></img>
            <div className={styles.info}>
                <div className={styles.username}>
                    {user.login ? user.login : "user"}
                </div>
                <div className={styles.reviews}>
                    <span>Всего рецензий: </span>
                    <span className={styles.value}>{user.reviews_count ? user.reviews_count : 0}</span>
                </div>
                <div className={styles.date}>
                    <span>На сайте с: </span>
                    <span className={styles.value}>{new Date(user.registration_date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}