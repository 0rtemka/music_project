import styles from "./AddArtistForm.module.css"
import { api, API_URL } from "../../http";
import ArtistCard from "../ArtistCard/ArtistCard";
import { useEffect, useState } from "react";

export function AddArtistForm() {
    const [name, setName] = useState<string>("");
    const [cover, setCover] = useState<FileList | null>(null);
    const [src, setSrc] = useState<string | ArrayBuffer | null>(null);

    const addArtist = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        api.post(`${API_URL}/artists`, data).then(() => {
            setName("");
            setSrc("");
        });
    }

    useEffect(() => {
        if (FileReader && cover) {
            const fr = new FileReader();
            fr.onload = function () {
                setSrc(fr.result);
            }
            fr.readAsDataURL(cover[0]);
        }
    }, [cover]);

    return (
        <>
            <div className={styles.addArtist}>
                <span className={styles.addArtistTitle}>Добавить исполнителя</span>
                <form className={styles.artistForm} onSubmit={addArtist}>
                    <input type="text" name="name" className={styles.artistInput} value={name} onChange={e => setName(e.target.value)} placeholder="Имя исполнителя"></input>
                    <div className={styles.fileInput}>
                        <span className={styles.fileInputText}>Обложка профиля</span>
                        <input type="file" name="cover" placeholder="Обложка профиля" className={styles.file} onChange={e => {
                            setCover(e.target.files)
                        }}></input>
                    </div>
                    <button className={styles.artistButton}>Добавить</button>
                </form>
            </div>
            {src ?
                <div className={styles.preview}>
                    <span className={styles.addArtistTitle}>Предосмотр</span>
                    <ArtistCard name={name} cover={cover![0].name} rating={50} file={src!} />
                </div>
                :
                null
            }
        </>
    )
}