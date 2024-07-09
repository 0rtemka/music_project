import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/errorRequest";

export function checkAdminRoleHandler(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    if (!user!.roles!.includes("ADMIN")) {
        throw ApiError.forbidden();
    }
    next();
} 