import { ApiError } from "../errors/errorRequest";
import { User } from "../models/User";
import { usersRepo } from "../repos/usersRepo";
import { UserDto } from "../web/dtos/UserDto";

class UsersService {
    async getAll() {
        return await usersRepo.findAll();
    }

    async getById(userId: number) {
        const user = await usersRepo.findById(userId);
        if (!user) throw ApiError.notFound(`Пользователь с id = ${userId} не найден`);
        return user;
    }

    async getByLogin(login: string) {
        const user = await usersRepo.findByLogin(login);
        if (!user) return null;
        return user;
    }

    async add(user: User) {
        return await usersRepo.save(user);
    }
}

export const usersService = new UsersService();