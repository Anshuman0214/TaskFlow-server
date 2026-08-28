import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const notFoundMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
};