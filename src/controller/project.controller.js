import {
  createProjectService,
  getProjectsService,
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

    res.status(201).json({
      message: "Project gotten successfully",
      status: "Success",
      data: {
        total,
        projects,
      },
    });
  }
}
