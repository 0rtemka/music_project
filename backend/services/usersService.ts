import { ApiError } from "../errors/errorRequest";
import { User } from "../models/User";
import { usersRepo } from "../repos/usersRepo";

class UsersService {
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
        const savedUser = (await usersRepo.save(user))[0];
        await usersRepo.saveRole(savedUser.id!, 'USER');
        return savedUser;
    }
}

export const usersService = new UsersService();