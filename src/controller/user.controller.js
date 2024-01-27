import { createUser, loginUser } from "../services/user.service.js";
import { newToken } from "../utils/jwtHandler.js";

export default class UserController {
  static async signup(req, res) {
    const newUser = await createUser(req.body);

    res.status(201).json({
      message: "User created successfully",
      status: "Success",
      data: {
        newUser,
      },
    });
  }
  static async login(req, res) {
    const user = await loginUser(req.body);

    res.status(200).json({
      message: "Login successfull",
      status: "Success",
      data: {
        user,
        access_token: newToken(user),
      },
    });
  }
}
