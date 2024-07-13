import styles from "./FindPage.module.css";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../http";
import CardsScroll from "../../components/CardsScroll/CardsScroll";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAlbums, setArtists, setFind, setSongs } from "../../store/reducers/searchReducer";
import { ErrorCard } from "../../components/ErrorCard/ErrorCard";

export function FindPage() {
    const { find, artists, songs, albums } = useAppSelector(state => state.search)
    const [findInput, setFindInput] = useState<string>(find);
    const [notFound, setNotFound] = useState<number>(0);

    const dispatch = useAppDispatch();

    const getArtists = () => {
        axios.get(`${API_URL}/artists?name=${findInput}`)
            .then(res => {
                dispatch(setArtists(res.data));
                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getSongs = () => {
        axios.get(`${API_URL}/songs?title=${findInput}`)
            .then(res => {
                dispatch(setSongs(res.data));
                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getAlbums = () => {
        axios.get(`${API_URL}/albums?title=${findInput}`)
            .then(res => {
                dispatch(setAlbums(res.data));
                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getAll = () => {
        setNotFound(0);
        dispatch(setFind(findInput));
        getArtists();
        getSongs();
        getAlbums();
    }

    return (
        <>
            <div className={styles.searchPage}>
                <span className={styles.searchFormTitle}>Введите имя музыканта или название песни/альбома</span>
                <form className={styles.searchForm} onSubmit={e => {
                    e.preventDefault();
                    getAll();
                }}>
                    <input className={styles.searchInput} value={findInput} onChange={e => setFindInput(e.target.value)}></input>
                    <button className={styles.searchButton}>Найти</button>
                </form>

                {notFound == 3 ?
                    <div className={styles.errorCard}>
                        <ErrorCard text={`По запросу '${find}' ничего не найдено :(`} />
                    </div>
                    : null
                }

                {artists.length != 0 ?
                    <CardsScroll title="Исполнители" artists={artists}></CardsScroll>
                    : null
                }
                {songs.length != 0 ?
                    <CardsScroll title="Песни" songs={songs}></CardsScroll>
                    : null
                }
                {albums.length != 0 ?
                    <CardsScroll title="Альбомы" songs={albums}></CardsScroll>
                    : null
                }
            </div>
        </>
    )
}