import styles from './RatingForm.module.css'
import RatingFormBody from '../RatingFormBody/RatingFormBody'

export default function RatingForm() {
    return (
        <>
            <div className={styles.formTitle}>Напишите рецензию</div>
            <form className={styles.ratingForm}>
                <RatingFormBody />
            </form>
        </>
    )
}