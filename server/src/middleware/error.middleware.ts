import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.error(error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });

    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};