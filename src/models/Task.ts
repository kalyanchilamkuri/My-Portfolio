import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date },
  order: { type: Number, default: 0 },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", default: null },
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
