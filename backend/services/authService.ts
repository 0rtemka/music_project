import { ApiError } from "../errors/errorRequest";
import { UserDto } from "../web/dtos/UserDto";
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

    const userDto = new UserDto((await usersService.add(user))[0]);

    const tokens = tokensService.generateTokens({ ...userDto });
    await tokensService.saveToken(userDto.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(login: string, password: string) {
    const user = await usersService.getByLogin(login);
    if (!user) throw ApiError.badRequest("Неверный логин или пароль");

    const isPasswdsEquals = bcrypt.compare(password, user.password!);
    if (!isPasswdsEquals)
      throw ApiError.badRequest("Неверный логин или пароль");

    const userDto = new UserDto(user);
    const tokens = tokensService.generateTokens({ ...userDto });
    await tokensService.saveToken(userDto.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken: string) {
    await tokensService.deleteRefreshToken(refreshToken);
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw ApiError.unauthorized();

    const userData = tokensService.validateRefreshToken(
      refreshToken
    ) as UserDto;
    const tokenFromDb = await tokensService.getByRefreshToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.unauthorized();
    }

    const user = await usersService.getById(userData.id!);
    const userDto = new UserDto(user);
    const tokens = tokensService.generateTokens({ ...userDto });
    await tokensService.saveToken(userDto.id!, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export const authService = new AuthService();
