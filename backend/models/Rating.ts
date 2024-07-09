export interface Rating {
    id?: number;
    rating?: number;
    relevance: number;
    structure: number;
    realization: number;
    lyrics: number;
    beat: number;
}

export interface SongRating extends Rating {
    song_id: number;
}

export interface AlbumRating extends Rating {
    album_id: number;
}

export interface ReviewRating extends Rating {
    review_id: number;
}