import Joi from "joi";

export const createPlanValidator = Joi.object({
  name: Joi.string().required().min(3),
  summary: Joi.string().optional(),
  objective: Joi.string().optional(),
  priorityAreas: Joi.string().required().min(3),
  currency: Joi.string().required().valid("usd", "eur", "jpy", "gbp", "ngn"),
  grantAmount: Joi.number().required(),
  maleEnrollment: Joi.number().required(),
  femaleEnrollment: Joi.number().required(),
  state: Joi.string().required(),
  lga: Joi.string().required(),
  community: Joi.string().required(),
  latitude: Joi.string()
    .pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid latitude value",
    }),
  longitude: Joi.string()
    .pattern(/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)
    .messages({
      "string.pattern.base": "Invalid logitude value",
    })
    .required(),
}).strict();
