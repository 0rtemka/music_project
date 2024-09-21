import { Link } from 'react-router-dom'
import { Review, User } from '../../models/models'
import Rating from '../Rating/Rating'
import styles from './ReviewHeader.module.css'
import { observer } from 'mobx-react-lite'
import { userDataStore } from '../../store/mobx/userDataStore'

interface ReviewHeader {
    img: string,
    user: User,
    review: Review,
}

interface ReviewHeaderProps {
    props: ReviewHeader
}

const ReviewHeader = observer(({ props }: ReviewHeaderProps) => {

    return (
        <div className={styles.reviewHeader}>
            <div className={styles.reviewContent}>
                <img className={styles.userIcon} src={props.img}></img>
                <div className={styles.reviewInfo}>
                    <Link to={userDataStore.user.id == props.user.id ? "/me" :`/users/${props.user.id}`} className={styles.username}>{props.user.login}</Link>
                    <span className={styles.reviewDate}>{new Date(props.review.issued_at).toLocaleDateString()}</span>
                </div>
            </div>
            <Rating rating={props.review.rating.rating} />
        </div>
    )
})

export default ReviewHeader;