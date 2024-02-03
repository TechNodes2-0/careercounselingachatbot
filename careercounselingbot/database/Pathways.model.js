import { Schema, models, model, Document } from "mongoose";

// Define the pathway schema
const PathwaySchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  sub: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
});

// Define the career pathways schema
const CareerPathwaysSchema = new Schema({
  title: { type: String, required: true },
  pathways: [PathwaySchema],
});

// Define the model
const CareerPathways =
  models.CareerPathways || model("CareerPathways", CareerPathwaysSchema);

export default CareerPathways;
