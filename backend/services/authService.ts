import { ApiError } from "../errors/errorRequest";
import { UserPayload } from "../web/dtos/UserPayload";
import { tokensService } from "./tokensService";
import { usersService } from "./usersService";
import bcrypt from "bcrypt";

class AuthService {
  async registration(login: string, password: string) {
    let user = await usersService.getByLogin(login);
    if (user) {
      throw ApiError.badRequest("Пользователь с таким логином уже существует");
    }

    const hashPasword = await bcrypt.hash(password, 12);
    user = {
      login,
      password: hashPasword,
      registration_date: new Date(Date.now()),
    };

    const savedUser = await usersService.add(user);
    const userPayload = new UserPayload(savedUser);

    const tokens = tokensService.generateTokens({ ...userPayload });
    await tokensService.saveToken(savedUser.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userPayload,
    };
  }

  async login(login: string, password: string) {
    const user = await usersService.getByLogin(login);
    if (!user) throw ApiError.badRequest("Неверный логин или пароль");    

    const isPasswdsEquals = await bcrypt.compare(password, user.password!);
    
    if (!isPasswdsEquals)
      throw ApiError.badRequest("Неверный логин или пароль");

    const userPayload = new UserPayload(user);

    const tokens = tokensService.generateTokens({ ...userPayload });
    await tokensService.saveToken(user.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userPayload,
    };
  }

  async logout(refreshToken: string) {
    await tokensService.deleteRefreshToken(refreshToken);
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw ApiError.unauthorized();

    const userData = tokensService.validateRefreshToken(refreshToken);    
    const tokenFromDb = await tokensService.getByRefreshToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.unauthorized();
    }

    const user = await usersService.getById(userData.id!);
    const userPayload = new UserPayload(user);
        
    const tokens = tokensService.generateTokens({ ...userPayload });
    await tokensService.saveToken(user.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userPayload,
    };
  }
}

export const authService = new AuthService();
