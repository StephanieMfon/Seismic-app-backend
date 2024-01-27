import bcrypt from "bcrypt";
import User from "../models/user.models.js";
import {
  createUserValidator,
  loginUserValidator,
} from "../validators/auth.validator.js";
import { ConflictError } from "../utils/error.js";
import sendEmail from "../services/email.service.js";

export const createUser = async (user) => {
  const emailExists = await User.find({ email: user.email });
  if (emailExists.length > 0)
    throw new ConflictError("An account with this email already exists.");
  const { error } = createUserValidator.validate(user);
  if (error) throw error;

  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
  const userBody = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: hashedPassword,
    confirm_password: hashedPassword,
  };

  const newUser = await User.create(userBody);
  const newUserObject = newUser.toObject();
  delete newUserObject.password;
  delete newUserObject.confirm_password;

  sendEmail(
    newUser.email,
    "Welcome to Seismic!",
    `Hello ${newUser.fullName}.\n\nWe are very delighted to welcome to you to the team!.`
  );

  return newUserObject;
};

export const loginUser = async (userBody) => {
  const { error } = loginUserValidator.validate(userBody);
  if (error) throw error;
  if (!userBody.email)
    throw new BadUserRequestError(
      "Please provide a username and email before you can login."
    );

  const user = await User.findOne({ email: userBody.email }).select(
    "-confirm_password"
  );
  if (!user) throw new BadUserRequestError("Invalid Credentials!");
  const hash = bcrypt.compareSync(userBody.password, user.password);
  if (!hash) throw new BadUserRequestError("Invalid Credentials");
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
