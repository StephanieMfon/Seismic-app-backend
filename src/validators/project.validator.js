import Joi from "joi";

export const createProjectValidator = Joi.object({
  plan: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/, "object Id"),
  planId: Joi.string().regex(/^[0-9a-fA-F]{24}$/, "object Id"),
  status: Joi.string().valid(
    "not-started",
    "in-progress",
    "on-hold",
    "completed",
    "blocked"
  ),
  sourceOfFunding: Joi.string().valid(
    "self-funding",
    "bank-loans",
    "crowdfunding",
    "grants",
    "corporate-sponsorship",
    "government-funding",
    "strategic-partnerships",
    "other"
  ),
  cost: Joi.number().required(),
  currency: Joi.string().required().valid("usd", "eur", "jpy", "gbp", "ngn"),
  isDeleted: Joi.boolean().optional(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  currency: Joi.string().required().valid("usd", "eur", "jpy", "gbp", "ngn"),
  state: Joi.string().required(),
  levelOfCompletion: Joi.number().required(),
  projectAddress: Joi.string().required().min(3),
  title: Joi.string().required().min(3),
  description: Joi.string().required().min(3),

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
