import { Router } from "express";
import { jwtHandler } from "../../middlewares/jwtHandler";
import { usersController } from "../controllers/usersController";
import { songsReviewsController } from "../controllers/songsReviewsController";

export const usersRouter = Router();

usersRouter.get("/me", jwtHandler, usersController.getCurrentUser);
usersRouter.get("/me/reviews", jwtHandler, songsReviewsController.getAllByCurrentUser);
usersRouter.post("/me/reviews", jwtHandler, songsReviewsController.addReview);
usersRouter.get("/users/:userId", jwtHandler, usersController.getById);
usersRouter.get("/users/:userId/reviews", jwtHandler, songsReviewsController.getAllByUser);