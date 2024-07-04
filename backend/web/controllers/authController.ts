import { NextFunction, Request, Response } from "express";
import { User } from "../../models/User";
import { authService } from "../../services/authService";
import { usersService } from "../../services/usersService";
import { UserDto } from "../dtos/UserDto";

class AuthController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const user: User = req.body;
    authService
      .registration(user.login, user.password!)
      .then((userData) => {
        res.cookie("refreshToken", userData.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });
        res.send(userData);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const user: User = req.body;
    authService.login(user.login, user.password!).then((userData) => {
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.send(userData);
    });
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    const { refreshToken } = req.cookies;

    authService.logout(refreshToken).then(() => {
      res.clearCookie("refreshToken");
      res.send();
    }).catch(err => {
      next(err);
    });
    
  }

  async refresh(req: Request, res: Response, next: NextFunction) {  
    const { refreshToken } = req.cookies;

    authService.refresh(refreshToken).then(userData => {
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.send(userData);
    }).catch(err => {
      next(err);
    })

  }

  getUsers(req: Request, res: Response, next: NextFunction) {    
    usersService
      .getAll()
      .then((users) => {
        res.send(users.map((user) => new UserDto(user)));
      })
      .catch((err) => {
        next(err);
      });
  }
}

export const authController = new AuthController();
