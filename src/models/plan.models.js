import { Schema, model } from "mongoose";

const PlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    objective: {
      type: String,
    },
    priorityAreas: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      enum: ["usd", "eur", "jpy", "gbp", "ngn"],
    },
    grantAmount: {
      type: Number,
      required: true,
    },
    maleEnrollment: {
      type: Number,
    },
    femaleEnrollment: {
      type: Number,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
    community: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

export default model("Plan", PlanSchema);
