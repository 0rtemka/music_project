import { NextFunction, Request, Response } from "express";
import { usersService } from "../../services/usersService";
import { UserPayload } from "../dtos/UserPayload";

class UsersController {
  getById(req: Request, res: Response, next: NextFunction) {
    const userId: number = parseInt(req.params.userId);

    usersService
      .getById(userId)
      .then((user) => {
        res.send(new UserPayload(user));
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
        res.send(new UserPayload(user));
      })
      .catch((err) => {
        next(err);
      });
  }
}

export const usersController = new UsersController();
