import { Router } from "express";
import PlansController from "../controller/plan.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";

const router = Router();

router.post("/create", tryCatchHandler(PlansController.createPlan));
router.get("/", tryCatchHandler(PlansController.getPlans));

export { router };
