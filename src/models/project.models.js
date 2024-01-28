import { Schema, model, Types, Query } from "mongoose";

const ProjectsSchema = new Schema(
  {
    plan: {
      type: Types.ObjectId,
      ref: "Plan",
      required: true,
      validate: {
        validator: async function (value) {
          const plan = await model("Plan").findById(value);
          return plan !== null;
        },
        message: "The plan ID provided does not belong to a valid plan.",
      },
    },
    planId: String,
    status: {
      type: String,
      enum: ["not-started", "in-progress", "on-hold", "completed", "blocked"],
      default: "not-started",
    },
    sourceOfFunding: {
      type: String,
      enum: [
        "self-funding",
        "bank-loans",
        "crowdfunding",
        "grants",
        "corporate-sponsorship",
        "government-funding",
        "strategic-partnerships",
        "other",
      ],
      default: "self-funding",
    },
    currency: {
      type: String,
      enum: ["usd", "eur", "jpy", "gbp", "ngn"],
    },
    cost: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    levelOfCompletion: {
      type: Number,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    projectAddress: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: Date,
    endDate: Date,
  },
  {
    timestamps: true,
  }
);

ProjectsSchema.pre(/^find/, function (next) {
  if (this instanceof Query) {
    this.where({ isDeleted: { $ne: true } });
  }
  next();
});

ProjectsSchema.pre(/save/, function (next) {
  this.planId = this.plan;
  next();
});

export default model("Project", ProjectsSchema);
