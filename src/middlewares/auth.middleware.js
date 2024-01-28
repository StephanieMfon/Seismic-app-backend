import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UnAuthorizedError } from "../utils/error.js";

dotenv.config();

function authMiddleWare(req, res, next) {
  const tokenArray = req.headers?.authorization?.split(" ");
  const tokenValue = tokenArray?.[1];
  if (!tokenValue) {
    throw new UnAuthorizedError("You must provide an authorization token.");
  }
  const jwt_secret = process.env.JWT_ACCESS_TOKEN;

  try {
    const payload = jwt.verify(tokenValue, jwt_secret);
    req.user = payload;
    next();
  } catch (err) {
    throw new UnAuthorizedError("Access denied, invalid token.");
  }
}

export default authMiddleWare;
