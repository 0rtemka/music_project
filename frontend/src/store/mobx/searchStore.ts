import { action, makeObservable, observable } from "mobx";
import { Artist, Song } from "../../models/models";

class SearchStore {
    find: string = "";
    artists: Artist[] = [];
    songs: Song[] = [];
    albums: Song[] = [];

    constructor() {
        makeObservable(this, {
            find: observable,
            artists: observable,
            songs: observable,
            albums: observable,
            setFind: action,
            setArtists: action,
            setSongs: action,
            setAlbums: action,
            clearSearch: action
        })
    }

    setFind(find: string) {
        this.find = find;
    }

    setArtists(artists: Artist[]) {
        this.artists = artists;
    }

    setSongs(songs: Song[]) {
        this.songs = songs;
    }

    setAlbums(albums: Song[]) {
        this.albums = albums;
    }

    clearSearch() {
        this.find = "";
        this.artists = [];
        this.songs = [];
        this.albums = [];
    }
}

export const searchStore = new SearchStore();