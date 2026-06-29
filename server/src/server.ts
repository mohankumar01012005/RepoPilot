import dotenv from "dotenv";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log("🚀 GitHub Automation Bot API Started");
  console.log(`🌍 Server : http://localhost:${PORT}`);
  console.log(`📅 Started: ${new Date().toLocaleString()}`);
  console.log("======================================");
});