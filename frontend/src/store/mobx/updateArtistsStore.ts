import { action, makeObservable, observable } from "mobx";

class UpdateArtistsStore {
    updateArtists = true;

    constructor() {
        makeObservable(this, {
            updateArtists: observable,
            switch: action,
        })
    }

    switch() {
        this.updateArtists = !this.updateArtists;
    }
}

export const updateArtistsStore = new UpdateArtistsStore();