import { Router } from "express";
import ProjectsController from "../controller/project.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = Router();

router.post(
  "/create",
  authMiddleware,
  tryCatchHandler(ProjectsController.createProject)
);
router.get("/", tryCatchHandler(ProjectsController.getProjects));
router.get(
  "/count-by-status",
  authMiddleware,
  tryCatchHandler(ProjectsController.groupByStatus)
);
router.get(
  "/amount-by-state",
  authMiddleware,
  tryCatchHandler(ProjectsController.totalAmountByState)
);
router.get(
  "/download-csv",
  authMiddleware,
  tryCatchHandler(ProjectsController.downloadProjectsCsv)
);

export { router };
