import { Song } from "./Song";

export interface SongReview {
    id?: number;
    user_id?: number;
    song_id: number;
    song?: Song;
    title: string,
    description: string;
    issued_at?: Date;
}