import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/errorRequest";
import { tokensService } from "../services/tokensService";
import { UserDto } from "../web/dtos/UserDto";

declare module 'express-serve-static-core' {
    interface Request {
      user?: UserDto
    }
}

export function jwtHandler (req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return next(ApiError.unauthorized());

        const accessToken = authHeader!.split(" ")[1];
        if (!accessToken) return next(ApiError.unauthorized());

        const userData = tokensService.validateAccessToken(accessToken);
        if (!userData) return next(ApiError.unauthorized());

        req.user = userData;
        next();

    } catch (err) {
        next(ApiError.unauthorized());
    }
}