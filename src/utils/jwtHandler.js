import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function newToken(user) {
  const payload = { user: user._id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
}
