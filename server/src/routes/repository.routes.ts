import { Router } from "express";
import protect from "../middlewares/auth.middleware";
import {
  getRepositories,
  connectUserRepository,
} from "../controllers/repository.controller";

const router = Router();

router.get("/", protect, getRepositories);

router.post(
  "/connect",
  protect,
  connectUserRepository
);

export default router;