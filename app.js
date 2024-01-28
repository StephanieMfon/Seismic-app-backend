// Dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
import cron from "node-cron";
import { router as userRouter } from "./src/router/auth.router.js";
import { router as planRouter } from "./src/router/plans.router.js";
import { router as projectRouter } from "./src/router/projects.router.js";
import { globalErrorHandler } from "./src/utils/globalErrorHandler.js";
import { keepServerAlive } from "./src/utils/keepServerAlive.js";
dotenv.config();

// Database Connection
const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(logger("tiny"));
app.use(cors());
cron.schedule("*/14 * * * *", () => {
  keepServerAlive();
});
app.get("/api", (req, res) => {
  res.send("Welcome to Seismic App");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/plan", planRouter);
app.use("/api/v1/project", projectRouter);

app.use(globalErrorHandler);

// Server

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
