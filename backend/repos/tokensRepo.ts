import { pg } from "../db/connect";
import { UserToken } from "../models/UserToken";

const UserTokens = () => pg<UserToken>("users_tokens");

class TokensRepo {
  async findByUserId(userId: number) {
    return UserTokens().where("user_id", "=", userId).first();
  }

  async findByRefreshToken(refershToken: string) {
    return UserTokens().where("token", "=", refershToken).first();
  }

  async update(userToken: UserToken) {
    return UserTokens()
      .where("user_id", "=", userToken.user_id)
      .update(userToken)
      .returning("*");
  }

  async save(userToken: UserToken) {
    return UserTokens().insert(userToken).returning("*");
  }

  async delete(refreshToken: string) {
    return UserTokens().where("token", "=", refreshToken).del();
  }
}

export const tokensRepo = new TokensRepo();
