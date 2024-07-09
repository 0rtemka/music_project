import { Link } from 'react-router-dom'
import styles from './NeedAuthCard.module.css'

export function NeedAuthCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>Чтобы написать рецензию вы должны
                <Link to={"/login"} className={styles.loginLink}> войти в аккаунт</Link>
            </div>
        </div>
    )
}