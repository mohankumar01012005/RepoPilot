import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import healthRoutes from "./routes/health.routes";
import userRoutes from "./routes/user.routes";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import errorMiddleware from "./middlewares/error.middleware";
import repositoryRoutes from "./routes/repository.routes";
import webhookRoutes from "./routes/webhook.routes";
const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/repositories", repositoryRoutes);
app.use("/api/webhooks", webhookRoutes);
// 404 Middleware
app.use(notFoundMiddleware);

// Global Error Middleware
app.use(errorMiddleware);

export default app;