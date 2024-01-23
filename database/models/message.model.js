import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    title: String,
    recivedId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const messageModel = mongoose.model("message", messageSchema);
