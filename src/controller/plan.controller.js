import {
  createPlanService,
  getPlansService,
} from "../services/plan.service.js";

export default class PlansController {
  static async createPlan(req, res) {
    const plan = await createPlanService(req.body);
    res.status(201).json({
      message: "Project created successfully",
      status: "Success",
      data: {
        plan,
      },
    });
  }

  static async getPlans(req, res) {
    const { plans, total } = await getPlansService();

    res.status(200).json({
      message: "Plans gotten successfully",
      status: "Success",
      data: {
        total,
        plans,
      },
    });
  }
}
