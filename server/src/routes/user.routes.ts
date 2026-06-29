import { Router } from "express";
import protect from "../middlewares/auth.middleware";
import { getProfile } from "../controllers/user.controller";

const router = Router();

router.get("/me", protect, getProfile);

export default router;