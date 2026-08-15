import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileType: { type: String, required: true },
  fileUrl: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Document || mongoose.model("Document", DocumentSchema);
