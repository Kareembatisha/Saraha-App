import express from "express";
import * as messageController from "./message.controller.js";
import { validation } from "../middleware/validate.js";
import { messageSchema, updateMessageSchema } from "./message.validation.js";
import { validParam } from "../user/user.validation.js";

export const messageRouter = express.Router();

messageRouter.post(
  "/add",
  validation(messageSchema),
  messageController.addMessage
);
messageRouter.delete(
  "/delete/:id",
  validation(validParam),
  messageController.deleteMessage
);
messageRouter.put(
  "/update/:id",
  validation(updateMessageSchema),
  messageController.updateMessage
);
messageRouter.get(
  "/search/:id",
  validation(validParam),
  messageController.searchMessage
);
messageRouter.get(
  "/getUserMessages/:id",
  validation(validParam),
  messageController.getAllUserMessages
);
