import Rating from '../Rating/Rating'
import RatingItemForm from '../RatingItemForm/RatingItemForm'
import styles from './RatingForm.module.css'

export default function RatingForm() {
    return (
        <>
            <div className={styles.formTitle}>Напишите рецензию</div>
            <form className={styles.ratingForm}>
                <div className={styles.inputsAndRating}>
                    <RatingItemForm title='Актуальность' />
                    <RatingItemForm title='Харизма' />
                    <RatingItemForm title='Структура' />
                    <RatingItemForm title='Рифмы и образы' />
                    <Rating rating={87} />
                    <RatingItemForm title='Бит' />
                </div>
                <div className={styles.reviewBody}>
                    <input className={styles.titleInput} placeholder='Заголовок рецензии'></input>
                    <textarea className={styles.descInput} placeholder='Текст рецензии'></textarea>
                    <div className={styles.ratingButtonArea}>
                        <button className={styles.ratingButton}>Опубликовать</button>
                    </div>
                </div>
            </form>
        </>
    )
}