import styles from "./ErrorCard.module.css";

interface ErrorCardProps {
    text: string
}

export function ErrorCard({text}: ErrorCardProps) {
    return (
        <div className={styles.errorCard}>
            <div className={styles.leftHalf}>
                <img className={styles.errorImg} src="/not-found.png"></img>
                <span className={styles.errorTitle}>Not Found</span>
            </div>
            <div className={styles.rightHalf}>
                <span className={styles.errorText}>{text}</span>
            </div>
        </div>
    )
}