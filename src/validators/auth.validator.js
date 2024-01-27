import Joi from "joi";

export const createUserValidator = Joi.object({
  email: Joi.string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Email is not a valid email format/address",
    }),
  password: Joi.string().min(8).required().messages({
    "string.pattern.base": "Password must be 8 characters",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
}).strict();

export const loginUserValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).strict();
