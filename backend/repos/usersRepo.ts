import { pg } from "../db/connect";
import { User } from "../models/User";

const Users = () => pg<User>("users");

class UsersRepo {
    async findAll() {
        return Users();
    }

    async findById(userId: number) {
        return Users().where("id", "=", userId).first();
    }

    async findByLogin(login: string) {
        return Users().where("login", "=", login).first();
    }

    async save(user: User) {
        return Users().insert(user).returning("*");
    }
}

export const usersRepo = new UsersRepo();