import { Link } from 'react-router-dom'
import { Review, User } from '../../models/models'
import Rating from '../Rating/Rating'
import styles from './ReviewHeader.module.css'
import { useAppSelector } from '../../hooks/reduxHooks'

interface ReviewHeader {
    img: string,
    user: User,
    review: Review,
}

interface ReviewHeaderProps {
    props: ReviewHeader
}

export default function ReviewHeader({ props }: ReviewHeaderProps) {
    const currentUser = useAppSelector(state => state.user.user);        

    return (
        <div className={styles.reviewHeader}>
            <div className={styles.reviewContent}>
                <img className={styles.userIcon} src={props.img}></img>
                <div className={styles.reviewInfo}>
                    <Link to={currentUser.id == props.user.id ? "/me" :`/users/${props.user.id}`} className={styles.username}>{props.user.login}</Link>
                    <span className={styles.reviewDate}>{new Date(props.review.issued_at).toLocaleDateString()}</span>
                </div>
            </div>
            <Rating rating={props.review.rating.rating} />
        </div>
    )
}