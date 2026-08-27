import app from "./app.js";
import { env } from "./config/env.js";
import { connectMongoDB } from "./database/mongodb.js";

const startServer = async (): Promise<void> => {
  await connectMongoDB();

  const server = app.listen(env.PORT, () => {
    console.log(`TaskFlow API running on port ${env.PORT}`);
  });

  const shutdown = (): void => {
    console.log("Shutting down server...");

    server.close(() => {
      console.log("HTTP server closed");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
};

startServer();