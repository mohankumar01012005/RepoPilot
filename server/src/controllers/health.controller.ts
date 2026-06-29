import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "GitHub Automation Bot API is running 🚀",
    timestamp: new Date().toISOString(),
  });
};