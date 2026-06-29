import { Router } from "express";
import protect from "../middlewares/auth.middleware";
import { dashboardRepositories, dashboardStats } from "../controllers/dashboard.controller";
import { dashboardEvents } from "../controllers/dashboard.controller";
import { dashboardActions } from "../controllers/dashboard.controller";
const router = Router();

router.get(
  "/stats",
  protect,
  dashboardStats
);

router.get(
  "/events",
  protect,
  dashboardEvents
);

router.get(
  "/actions",
  protect,
  dashboardActions
);

router.get(
  "/repositories",
  protect,
  dashboardRepositories
);

export default router;