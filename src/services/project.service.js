import Project from "../models/project.models.js";
import { createProjectValidator } from "../validators/project.validator.js";

export const createProjectService = async (project) => {
  const { error } = createProjectValidator.validate(project);
  if (error) throw error;
  const newProject = await Project.create(project);
  return newProject;
};

export const getProjectsService = async () => {
  const [projects, total] = await Promise.all([
    Project.find().sort({ created_at: -1 }),
    Project.countDocuments(),
  ]);
  return { projects, total };
};