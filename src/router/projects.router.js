import { Router } from "express";
import ProjectsController from "../controller/project.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";

const router = Router();

router.post("/create", tryCatchHandler(ProjectsController.createProject));
router.get("/", tryCatchHandler(ProjectsController.getProjects));
router.get(
  "/count-by-status",
  tryCatchHandler(ProjectsController.groupByStatus)
);
router.get(
  "/amount-by-state",
  tryCatchHandler(ProjectsController.totalAmountByState)
);
router.get(
  "/download-csv",
  tryCatchHandler(ProjectsController.downloadProjectsCsv)
);

export { router };
