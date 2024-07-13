import { AxiosResponse } from "axios";
import { api } from "../http";
import { AuthResponse } from "../models/models";

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/login", { login, password });
  }

  static async registration(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/registration", { login, password });
  }

  static async logout(): Promise<void> {
    return api.post("/logout");
  }
}
