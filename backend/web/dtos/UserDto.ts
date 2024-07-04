import { User } from "../../models/User";

export class UserDto {
    id?: number;
    login: string;
    registration_date?: Date;

    constructor(user: User) {
        this.id = user.id;
        this.login = user.login;
        this.registration_date = user.registration_date;
    }
}