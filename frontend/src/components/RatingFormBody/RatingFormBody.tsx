import { useEffect, useState } from 'react';
import styles from './RatingFormBody.module.css'
import { Rating } from '../../models/models';
import { api, API_URL } from '../../http';
import { useDispatch } from 'react-redux';
import { setReview } from '../../store/reducers/curUserReviewReducer';
import { useParams } from 'react-router-dom';


export default function RatingFormBody() {
    const { songId } = useParams()
    const dispatch = useDispatch();
    const [rating, setRating] = useState("50");
    const [ratingItems, setRatingItems] = useState({ relevance: "5", structure: "5", realization: "5", lyrics: "5", beat: "5" });
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        const relevance = ratingItems.relevance ? Number(ratingItems.relevance) : 0;
        const structure = ratingItems.structure ? Number(ratingItems.structure) : 0;
        const realization = ratingItems.realization ? Number(ratingItems.realization) : 0;
        const lyrics = ratingItems.lyrics ? Number(ratingItems.lyrics) : 0;
        const beat = ratingItems.beat ? Number(ratingItems.beat) : 0;

        const rating = (relevance + realization + structure + lyrics + beat) * 2
        const strRating = rating ? rating.toString() : '-';

        setRating(strRating);

    }, [ratingItems]);

    const checkInputValue = (value: string, inputName: keyof Rating) => {
        const numValue = Number(value);
        const max = "10";
        const min = "0";

        if (numValue > Number(max)) setRatingItems(prev => ({ ...prev, [inputName]: max }));
        else if (numValue < Number(min)) setRatingItems(prev => ({ ...prev, [inputName]: min }));
        else setRatingItems(prev => ({ ...prev, [inputName]: value }));
    }

    const addReview = () => {
        api.post(`${API_URL}/me/reviews`, {
            title, description, song_id: songId, rating: {
                relevance: parseInt(ratingItems.relevance),
                realization: parseInt(ratingItems.realization),
                structure: parseInt(ratingItems.structure),
                lyrics: parseInt(ratingItems.lyrics),
                beat: parseInt(ratingItems.beat),
            }
        }).then((res) => {
            dispatch(setReview(res.data));
        })
    };

    return (
        <>
            <div className={styles.formTitle}>Напишите рецензию</div>
            <form className={styles.ratingForm} onSubmit={e => {
                e.preventDefault();
                addReview();
            }
            }>
                <div className={styles.inputsAndRating}>
                    <div className={styles.itemsForm}>
                        <span className={styles.itemTitle}>{'Актуальность'}</span>
                        <input className={styles.itemInput} required type='text' pattern='\d*' maxLength={2} value={ratingItems.relevance} onChange={e => {
                            checkInputValue(e.target.value, 'relevance');
                        }}></input>
                    </div>
                    <div className={styles.itemsForm}>
                        <span className={styles.itemTitle}>{'Структура'}</span>
                        <input className={styles.itemInput} required type='text' pattern='\d*' maxLength={2} value={ratingItems.structure} onChange={e => {
                            checkInputValue(e.target.value, 'structure');
                        }}></input>
                    </div>
                    <div className={styles.itemsForm}>
                        <span className={styles.itemTitle}>{'Реализация'}</span>
                        <input className={styles.itemInput} required type='text' pattern='\d*' maxLength={2} value={ratingItems.realization} onChange={e => {
                            checkInputValue(e.target.value, 'realization');
                        }}></input>
                    </div>
                    <div className={styles.itemsForm}>
                        <span className={styles.itemTitle}>{'Текст'}</span>
                        <input className={styles.itemInput} required type='text' pattern='\d*' maxLength={2} value={ratingItems.lyrics} onChange={e => {
                            checkInputValue(e.target.value, 'lyrics');
                        }}></input>
                    </div>
                    <div className={styles.rating}>
                        <span className={styles.ratingValue}>{rating}</span>
                        <span className={styles.ratingTitle}>{'Рейтинг'}</span>
                    </div>
                    <div className={styles.itemsForm}>
                        <span className={styles.itemTitle}>{'Бит'}</span>
                        <input className={styles.itemInput} required type='text' pattern='\d*' maxLength={2} value={ratingItems.beat} onChange={e => {
                            checkInputValue(e.target.value, 'beat');
                        }}></input>
                    </div>
                </div>
                <div className={styles.reviewBody}>
                    <input className={styles.titleInput} required value={title} onChange={e => setTitle(e.target.value)} placeholder='Заголовок рецензии'></input>
                    <textarea className={styles.descInput} required value={description} onChange={e => setDescription(e.target.value)} placeholder='Текст рецензии'></textarea>
                    <div className={styles.ratingButtonArea}>
                        <button className={styles.ratingButton}>Опубликовать</button>
                    </div>
                </div>
            </form>
        </>
    )
}