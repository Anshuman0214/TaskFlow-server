import { Response } from "express";

interface ApiResponseOptions<T> {
  res: Response;
  statusCode: number;
  message: string;
  data?: T;
}

export const sendSuccessResponse = <T>({
  res,
  statusCode,
  message,
  data,
}: ApiResponseOptions<T>): Response => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};