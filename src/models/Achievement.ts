import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Achievement || mongoose.model("Achievement", AchievementSchema);
