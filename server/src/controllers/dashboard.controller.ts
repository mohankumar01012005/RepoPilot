import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { getDashboardRepositories, getDashboardStats } from "../services/dashboard.service";
import { getRecentEvents } from "../services/dashboard.service";
import { getRecentActions } from "../services/dashboard.service";
export const dashboardStats = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const stats =
      await getDashboardStats(req.userId!);

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch dashboard stats.",
    });
  }
};

export const dashboardEvents = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const events =
      await getRecentEvents(req.userId!);

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch events.",
    });
  }
};

export const dashboardActions = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const actions =
      await getRecentActions(req.userId!);

    res.status(200).json({
      success: true,
      actions,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch actions.",
    });
  }
};


export const dashboardRepositories = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const repositories =
      await getDashboardRepositories(
        req.userId!
      );

    res.status(200).json({
      success: true,
      repositories,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch repositories.",
    });
  }
};