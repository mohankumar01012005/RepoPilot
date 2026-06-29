import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import {connectDatabase} from "./config/database";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log("");
    console.log("======================================");
    console.log("🚀 RepoPilot API Started");
    console.log(`🌍 Server : http://localhost:${PORT}`);
    console.log("======================================");
  });
};

startServer();