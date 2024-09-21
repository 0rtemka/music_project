import styles from "./FindPage.module.css";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../http";
import CardsScroll from "../../components/CardsScroll/CardsScroll";
import { ErrorCard } from "../../components/ErrorCard/ErrorCard";
import { observer } from "mobx-react-lite";
import { searchStore } from "../../store/mobx/searchStore";

export const FindPage = observer(() => {
    const [findInput, setFindInput] = useState<string>(searchStore.find);
    const [notFound, setNotFound] = useState<number>(0);

    const getArtists = () => {
        axios.get(`${API_URL}/artists?name=${findInput}`)
            .then(res => {
                searchStore.setArtists(res.data);
                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getSongs = () => {
        axios.get(`${API_URL}/songs?title=${findInput}`)
            .then(res => {
                searchStore.setSongs(res.data)
                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getAlbums = () => {
        axios.get(`${API_URL}/albums?title=${findInput}`)
            .then(res => {
                searchStore.setAlbums(res.data)

                if (res.data.length == 0) setNotFound(prev => prev + 1);
            }).catch(err => {
                console.log(err);
            })
    }

    const getAll = () => {
        setNotFound(0);
        searchStore.setFind(findInput);
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
                        <ErrorCard text={`По запросу '${searchStore.find}' ничего не найдено :(`} />
                    </div>
                    : null
                }

                {searchStore.artists.length != 0 ?
                    <CardsScroll title="Исполнители" artists={searchStore.artists}></CardsScroll>
                    : null
                }
                {searchStore.songs.length != 0 ?
                    <CardsScroll title="Песни" songs={searchStore.songs}></CardsScroll>
                    : null
                }
                {searchStore.albums.length != 0 ?
                    <CardsScroll title="Альбомы" songs={searchStore.albums}></CardsScroll>
                    : null
                }
            </div>
        </>
    )
})