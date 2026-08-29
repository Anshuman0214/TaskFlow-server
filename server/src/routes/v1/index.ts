import { Router } from "express";
import { sendSuccessResponse } from "../../utils/apiResponse.js";
const router = Router();

router.get("/", (_req, res) => {
  sendSuccessResponse({
    res,
    statusCode: 200,
    message: "TaskFlow API v1 is running",
    data: {
      version: "v1",
    },
  });
});

export default router;