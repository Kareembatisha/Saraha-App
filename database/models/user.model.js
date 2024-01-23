import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    email: { type: String },
    age: { type: String },
    password: { type: String },
    isLoggedIn: { type: Boolean, deafult: false },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("user", userSchema);
