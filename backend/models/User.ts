export interface User {
    id?: number,
    login: string,
    password?: string,
    registration_date?: Date
    roles?: string[]
    reviews_count?: number
}