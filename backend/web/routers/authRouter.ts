import { Router } from "express";
import { authController } from "../controllers/authController";
import { jwtHandler } from "../../middlewares/jwtHandler";

export const authRouter = Router();

authRouter.post("/registration", authController.registration);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.get("/refresh", authController.refresh);
authRouter.get("/users", jwtHandler, authController.getUsers);