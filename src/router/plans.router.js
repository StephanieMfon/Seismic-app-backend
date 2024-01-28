import { Router } from "express";
import PlansController from "../controller/plan.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";
import authMiddleWare from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/create",
  authMiddleWare,
  tryCatchHandler(PlansController.createPlan)
);
router.get("/", authMiddleWare, tryCatchHandler(PlansController.getPlans));

export { router };
