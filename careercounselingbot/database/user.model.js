import { Schema, models, model, Document } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  picture: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  educationLevel: { type: String, default: "" },
  std: { type: String, default: "" },
  interest: { type: String, default: "" },
  achievement: { type: String, default: "" },
  skill: { type: Object, default: {} },
});

const User = models.User || model("User", UserSchema);

export default User;
