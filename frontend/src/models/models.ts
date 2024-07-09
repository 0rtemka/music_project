export type Song = {
    id: string,
    title: string,
    cover: string,
    release_date: string,
    artists?: Artist[],
    rating?: Rating
}

export type Artist = {
    id: string,
    name: string,
    cover: string,
    rating: number
}

export type Rating = {
    rating: number,
    relevance: number,
    structure: number,
    realization: number,
    lyrics: number,
    beat: number,
}

export type Review = {
    id: string,
    user_id: string;
    title: string,
    description: string,
    issued_at: string,
    rating: Rating,
    song?: Song
}

export type User = {
    id: string,
    login: string,
    registration_date: string,
    roles: string[]
}

export type AuthResponse = {
    access_token: string,
    refresh_token: string,
    user: User,
}