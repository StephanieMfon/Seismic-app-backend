import {
  countByStatusService,
  createProjectService,
  downloadProjectsCsvService,
  getProjectsService,
  totalAmountByStateService,
} from "../services/project.service.js";

export default class ProjectsController {
  static async createProject(req, res) {
    const project = await createProjectService(req.body);
    res.status(201).json({
      message: "Project created successfully",
      status: "Success",
      data: {
        project,
      },
    });
  }

  static async getProjects(req, res) {
    const { projects, total } = await getProjectsService();

    res.status(200).json({
      message: "Project gotten successfully",
      status: "Success",
      data: {
        total,
        projects,
      },
    });
  }

  static async groupByStatus(req, res) {
    const projects = await countByStatusService();

    res.status(200).json({
      message: "Project gotten successfully",
      status: "Success",
      data: {
        projects,
      },
    });
  }

  static async totalAmountByState(req, res) {
    const projects = await totalAmountByStateService();

    res.status(200).json({
      message: "Project gotten successfully",
      status: "Success",
      data: {
        projects,
      },
    });
  }

  static async downloadProjectsCsv(req, res) {
    const projects = await downloadProjectsCsvService();

    res.attachment("Projects.csv").send(projects);
  }
}
