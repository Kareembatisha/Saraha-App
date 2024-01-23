import express from "express";
import * as userController from "./user.controller.js";
import { validation } from "../middleware/validate.js";
import { signInSchema, signUpSchema, validParam } from "./user.validation.js";

export const userRouter = express.Router();

userRouter.post("/register", validation(signUpSchema), userController.signUp);
userRouter.post("/login", validation(signInSchema), userController.signIn);
userRouter.put("/register/:id", validation(validParam), userController.logout);
userRouter.get("/allUsers", userController.getUsers);
userRouter.put(
  "/updateUser/:id",
  validation(signUpSchema),
  userController.updateUser
);
userRouter.delete(
  "/deleteUser/:id",
  validation(validParam),
  userController.deleteUser
);
userRouter.get("/sortUsers", userController.getUserSorted);
userRouter.get(
  "/searchUser/:id",
  validation(validParam),
  userController.searchUser
);
