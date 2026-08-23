import app from "./app.js";
import { env } from "./config/env.js";
import { connectMongoDB } from "./database/mongodb.js";

const startServer = async (): Promise<void> => {
  await connectMongoDB();

  app.listen(env.PORT, () => {
    console.log(`TaskFlow API running on port ${env.PORT}`);
  });
};

startServer();