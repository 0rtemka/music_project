import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/errorRequest";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.status).send(err);
  } else {
    res
      .status(500)
      .send(
        new ApiError(500, "Internal Server Error", new Date(Date.now()))
      );
  }
};
