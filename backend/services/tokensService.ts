import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { tokensRepo } from "../repos/tokensRepo";
import { User } from "../models/User";

dotenv.config();

class TokensService {
  generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await tokensRepo.findByUserId(userId);
    if (tokenData) {
        tokenData.token = refreshToken;
        return await tokensRepo.update(tokenData); 
    }
    return await tokensRepo.save({user_id: userId, token: refreshToken});
  }

  validateAccessToken(accessToken: string) {
    try {
      const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);
      return payload as User;
    } catch(err) {
      return null;
    }
  }

  validateRefreshToken(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
      return payload as User;
    } catch(err) {
      return null;
    }
  }

  async getByRefreshToken(refreshToken: string) {
    return await tokensRepo.findByRefreshToken(refreshToken);
  }

  async deleteRefreshToken(refreshToken: string) {
    await tokensRepo.delete(refreshToken);
  }
}

export const tokensService = new TokensService();
