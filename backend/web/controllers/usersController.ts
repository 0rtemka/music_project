import { NextFunction, Request, Response } from "express";
import { usersService } from "../../services/usersService";
import { UserDto } from "../dtos/UserDto";

class UsersController {
  getAll(req: Request, res: Response, next: NextFunction) {
    usersService
      .getAll()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        next(err);
      });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    const userId: number = parseInt(req.params.userId);

    usersService
      .getById(userId)
      .then((user) => {
        res.send(new UserDto(user));
      })
      .catch((err) => {
        next(err);
      });
  }

  getCurrentUser(req: Request, res: Response, next: NextFunction) {
    const user = req.user!;

    usersService
      .getById(user.id!)
      .then((user) => {
        res.send(new UserDto(user));
      })
      .catch((err) => {
        next(err);
      });
  }
}

export const usersController = new UsersController();
