export interface AddSongDto {
    id: number,
    title: string,
    cover: string,
    release_date: Date,
    is_album: boolean;
    artistsIds: number[] | number
} 