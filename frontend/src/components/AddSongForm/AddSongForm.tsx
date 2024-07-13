import { useState } from "react";
import { useArtists } from "../../hooks/useArtists"
import styles from "./AddSongForm.module.css"
import { Artist } from "../../models/models";
import { api, API_URL } from "../../http";

export function AddSongForm() {
    const artists = useArtists();
    const [selectedArtists, setSelectedArtists] = useState<Artist[]>([])
    const [artistInput, setArtistInput] = useState<string>("");
    const [error, setError] = useState<boolean>(false)

    const addSong = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedArtists.length == 0) {
            setError(true);
            return;
        }
        const form = e.currentTarget;
        const data = new FormData(form);
        selectedArtists.forEach(artist => {
            data.append("artistsIds", artist.id);
        });
        api.post(`${API_URL}/songs`, data).then((res) => {
            console.log(res);
            setSelectedArtists([]);
            form.reset();
        });
    }

    return (
        <div className={styles.addSong}>
            <span className={styles.addSongTitle}>Добавить песню/альбом</span>
            <form className={styles.addSongForm} onSubmit={addSong}>
                <input required type="text" className={styles.addSongInput} placeholder="Название песни/альбома" name="title"></input>
                <div className={styles.selectArtistInput}>
                    <input type="text" className={`${error ? styles.error : null}  ${styles.addSongInput}`} placeholder="Исполнители" list="artists" value={artistInput} onChange={e => setArtistInput(e.target.value)} onClick={() => setError(false)}></input>
                    <button className={styles.addArtistButton} onClick={e => {
                        e.preventDefault();
                        const artist = artists.find(a => a.name == artistInput);
                        if (artist) {
                            setSelectedArtists([...selectedArtists, artist]);
                            setArtistInput("");
                        }
                    }}>Выбрать</button>
                </div>
                <datalist id="artists">
                    {
                        artists.map(artist => <option key={artist.id} value={artist.name}></option>)
                    }
                </datalist>
                <div className={styles.selectedArtists}>
                    {selectedArtists.map(artist =>
                        <button key={artist.id} className={styles.selectedArtist} onClick={() => setSelectedArtists([...selectedArtists].filter(a => artist.id != a.id))}>{artist.name}</button>
                    )}
                </div>
                <div className={styles.releaseDate}>
                    <span className={styles.releaseDateTitle}>Дата релиза</span>
                    <input required type="date" className={styles.addSongInput} placeholder="Дата релиза" name="release_date"></input>
                </div>
                <div className={styles.addSongFileInput}>
                    <span className={styles.addSongFileTitle}>Обложка песни/альбома</span>
                    <input required type="file" className={styles.addSongfile} name="cover"></input>
                </div>
                <label className={styles.checkAlbumInput}>
                    <input type="checkbox" className={styles.isAlbumCheck} name="is_album"></input>
                    <span className={styles.isAlbum}>Альбом</span>
                </label>
                <button className={styles.addSongButton}>Добавить</button>
            </form>
        </div>
    )
}