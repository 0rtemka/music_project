import styles from './AuthError.module.css'; 

interface AuthErrorProps {
    message: string
}

export function AuthError({message}: AuthErrorProps) {
    return (
        <div className={styles.card}>
            {message}
        </div>
    )
}