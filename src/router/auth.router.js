import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { tryCatchHandler } from "../utils/tryCatchHandler.js";

const router = Router();

router.post("/create", tryCatchHandler(UserController.signup));
router.post("/login", tryCatchHandler(UserController.login));

export { router };
