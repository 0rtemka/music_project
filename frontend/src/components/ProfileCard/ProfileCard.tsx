import styles from './ProfileCard.module.css'

export interface UserInfo {
    login: string,
    registration_date: string,
}

interface ProfileCardProps {
    userInfo: UserInfo
}

export default function ProfileCard({ userInfo }: ProfileCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.icon} src={'/user.png'} alt='profile image'></img>
            <div className={styles.info}>
                <div className={styles.username}>
                    {userInfo.login}
                </div>
                <div className={styles.reviews}>
                    <span>Всего рецензий: </span>
                    <span className={styles.value}>{3}</span>
                </div>
                <div className={styles.date}>
                    <span>На сайте с: </span>
                    <span className={styles.value}>{new Date(userInfo.registration_date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}