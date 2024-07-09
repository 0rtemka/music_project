import styles from "./AddSongForm.module.css"

export function AddSongForm() {
    return (
        <div className={styles.addSong}>
            <span className={styles.addSongTitle}>Добавить песню/альбом</span>
            <form className={styles.addSongForm}>
                <input type="text" className={styles.addSongInput} placeholder="Название песни/альбома"></input>
                <input type="text" className={styles.addSongInput} placeholder="Исполнители"></input>
                <div className={styles.addSongFileInput}>
                    <span className={styles.addSongFileTitle}>Обложка песни/альбома</span>
                    <input type="file" className={styles.addSongfile}></input>
                </div>
                <button className={styles.addSongButton}>Добавить</button>
            </form>
        </div>
    )
}