import Plan from "../models/plan.models.js";
import { createPlanValidator } from "../validators/plan.validator.js";

export const createPlanService = async (plan) => {
  const { error } = createPlanValidator.validate(plan);
  if (error) throw error;

  const newPlan = await Plan.create(plan);
  return newPlan;
};

export const getPlansService = async () => {
  const [plans, total] = await Promise.all([
    Plan.find().sort({ created_at: -1 }),
    Plan.countDocuments(),
  ]);
  return { plans, total };
};
