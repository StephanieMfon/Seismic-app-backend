import { Router } from "express";
import ProjectsController from "../controller/project.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";

const router = Router();

router.post("/create", tryCatchHandler(ProjectsController.createProject));
router.get("/", tryCatchHandler(ProjectsController.getProjects));

export { router };
