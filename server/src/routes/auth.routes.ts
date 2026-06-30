import { Router } from "express";
import {
  githubLogin,
  githubCallback,
  getMe,
} from "../controllers/auth.controller";

import protect from "../middlewares/auth.middleware";

const router = Router();

router.get("/github", githubLogin);

router.get(
  "/github/callback",
  githubCallback
);

router.get(
  "/me",
  protect,
  getMe
);

export default router;