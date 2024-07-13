import { User } from "../../models/User";

export class UserPayload {
    id?: number;
    login: string;
    registration_date?: Date;
    roles?: string[];
    reviews_count?: number;

    constructor(user: User) {
        this.id = user.id;
        this.login = user.login;
        this.registration_date = user.registration_date;
        this.roles = user.roles;
        this.reviews_count = user.reviews_count;
    }
}