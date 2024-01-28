import { parse } from "json2csv";
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

export const countByStatusService = async () => {
  const aggregateByStatus = await Project.aggregate([
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  return aggregateByStatus;
};

export const totalAmountByStateService = async () => {
  const aggregateByStatus = await Project.aggregate([
    {
      $group: {
        _id: "$state",
        totalAmount: { $sum: "$cost" },
      },
    },
  ]);

  return aggregateByStatus;
};

export const downloadProjectsCsvService = async () => {
  const projects = await Project.find();

  const fields = [
    "status",
    "sourceOfFunding",
    "cost",
    "currency",
    "isDeleted",
    "startDate",
    "endDate",
    "state",
    "levelOfCompletion",
    "projectAddress",
    "title",
    "description",
    "latitude",
    "longitude",
    "_id",
  ];

  const data = parse(projects, { fields });
  return data;
};
