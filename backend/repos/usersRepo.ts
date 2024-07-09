import { pg } from "../db/connect";
import { User } from "../models/User";

const Users = () => pg<User>("users");

class UsersRepo {
  async findById(userId: number) {
    return Users()
      .select("users.*", pg.raw("json_agg(roles.role) as roles"))
      .join("users_roles", "users_roles.user_id", "users.id")
      .join("roles", "roles.id", "users_roles.role_id")
      .where("users.id", "=", userId)
      .groupBy("users.id")
      .first();
  }

  async findByLogin(login: string) {
    return Users()
      .select("users.*", pg.raw("json_agg(roles.role) as roles"))
      .join("users_roles", "users_roles.user_id", "users.id")
      .join("roles", "roles.id", "users_roles.role_id")
      .where("login", "=", login)
      .groupBy("users.id")
      .first();
  }

  async save(user: User) {
    return Users()
      .insert(user)
      .returning("*");
  }

  async saveRole(userId: number, role: string) {
    return pg("users_roles").insert({
      user_id: userId,
      role_id: pg("roles").where("role", "=", role).select("id").first(),
    });
  }
}

export const usersRepo = new UsersRepo();