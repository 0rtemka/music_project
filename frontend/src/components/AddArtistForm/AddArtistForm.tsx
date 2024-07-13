import styles from "./AddArtistForm.module.css"
import { api, API_URL } from "../../http";
import ArtistCard from "../ArtistCard/ArtistCard";
import { useEffect, useState } from "react";
import { ArtistSearchCard } from "../ArtistSearchCard/ArtistSearchCard";
import { Artist } from "../../models/models";
import { AuthError } from "../AuthError/AuthError";

export function AddArtistForm() {
    const [name, setName] = useState<string>("");
    const [cover, setCover] = useState<FileList | null>(null);
    const [miniCover, setMiniCover] = useState<FileList | null>(null);
    const [srcCover, setSrcCover] = useState<string | ArrayBuffer | null>(null);
    const [srcMiniCover, setSrcMiniCover] = useState<string | ArrayBuffer | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const addArtist = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        const data = new FormData(e.currentTarget);
        e.currentTarget.reset();
        api.post(`${API_URL}/artists`, data).then(() => {
            setName("");
            setSrcCover("");
            setSrcMiniCover("");
        }).catch(err => {
            setErrorMsg(err.response.data.message);
        }).finally(() => {
            setCover(null);
            setMiniCover(null);
        });
    }

    useEffect(() => {
        if (FileReader && cover) {
            const fr = new FileReader();
            fr.onload = function () {
                setSrcCover(fr.result);
            }
            fr.readAsDataURL(cover[0]);
        }
    }, [cover]);

    useEffect(() => {
        if (FileReader && miniCover) {
            const fr = new FileReader();
            fr.onload = function () {
                setSrcMiniCover(fr.result);
            }
            fr.readAsDataURL(miniCover[0]);
        }
    }, [miniCover]);

    return (
        <>
            <div className={styles.addArtist}>
                <span className={styles.addArtistTitle}>Добавить исполнителя</span>
                <form className={styles.artistForm} onSubmit={addArtist}>
                    {errorMsg ?
                        <AuthError message={errorMsg} />
                        : null
                    }
                    <input required type="text" name="name" className={styles.artistInput} value={name} onChange={e => setName(e.target.value)} placeholder="Имя исполнителя"></input>
                    <div className={styles.fileInput}>
                        <span className={styles.fileInputText}>Обложка профиля</span>
                        <input required type="file" name="cover" placeholder="Обложка профиля" className={styles.file} onChange={e => {
                            setCover(e.target.files)
                        }}></input>
                    </div>
                    <div className={styles.fileInput}>
                        <span className={styles.fileInputText}>Обложка мини-профиля</span>
                        <input required type="file" name="miniCover" placeholder="Обложка мини-профиля" className={styles.file} onChange={e => {
                            setMiniCover(e.target.files)
                        }}></input>
                    </div>
                    <button className={styles.artistButton}>Добавить</button>
                </form>
            </div>
            <div className={styles.preview}>
                {srcCover || srcMiniCover ?
                    <span className={styles.addArtistTitle}>Предосмотр</span>
                    : null
                }

                {srcCover ?
                    <div className={styles.preview}>
                        <ArtistCard name={name} cover={cover![0].name} rating={50} file={srcCover} />
                    </div>
                    : null
                }
                {srcMiniCover ?
                    <div className={styles.preview}>
                        <ArtistSearchCard artist={{ name } as Artist} file={srcMiniCover} />
                    </div>
                    : null
                }
            </div>
        </>
    )
}