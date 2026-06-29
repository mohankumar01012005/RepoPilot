import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  res.status(200).json({
    success: true,
    userId: req.userId,
  });
};