import express from "express";
import router from "./routes/index.js";
import { requestTimeMiddleware } from "./middleware/requestTime.middleware.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
const app = express();

app.use(express.json());

app.use(requestTimeMiddleware);

app.use("/", router);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;