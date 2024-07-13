import { createSlice } from "@reduxjs/toolkit";
import { Artist, Song, User } from "../../models/models";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    find: "",
    artists: [] as Artist[],
    songs: [] as Song[],
    albums: [] as Song[]
  },
  reducers: {
    setFind: (state, action) => {
      state.find = action.payload;
    },

    setArtists: (state, action) => {
      state.artists = action.payload;
    },

    setSongs: (state, action) => {
        state.songs = action.payload;
    },

    setAlbums: (state, action) => {
        state.albums = action.payload;
    },

    clearSearch: (state) => {
      state.find = "";
      state.artists = [] as Artist[];
      state.songs = [] as Song[];
      state.albums = [] as Song[];
    }
  },
});

export const { setFind, setArtists, setSongs, setAlbums, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
