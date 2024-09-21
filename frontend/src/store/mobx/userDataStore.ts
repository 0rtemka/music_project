import { action, makeObservable, observable } from "mobx";
import { User } from "../../models/models";

export class UserDataStore {
    user = {} as User;
    isAuth = false;

    constructor() {
        makeObservable(this, {
            user: observable,
            isAuth: observable,
            setAuth: action,
            setUser: action,
        })
    }

    setAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    setUser(user: User) {
        this.user = user;
    }
}

export const userDataStore = new UserDataStore();