import styles from './ProfileCard.module.css'

export interface UserInfo {
    name: string,
    reviewsCount: number,
    registrationDate: Date,
    profileImg: string
}

interface ProfileCardProps {
    userInfo: UserInfo
}

export default function ProfileCard({ userInfo }: ProfileCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.icon} src={userInfo.profileImg} alt='profile image'></img>
            <div className={styles.info}>
                <div className={styles.username}>
                    {userInfo.name}
                </div>
                <div className={styles.reviews}>
                    <span>Всего рецензий: </span>
                    <span className={styles.value}>{userInfo.reviewsCount}</span>
                </div>
                <div className={styles.date}>
                    <span>На сайте с: </span>
                    <span className={styles.value}>{userInfo.registrationDate.toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}