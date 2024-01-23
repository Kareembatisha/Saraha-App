import Joi from "joi";

export const messageSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
});

export const updateMessageSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  id: Joi.string().hex().min(24).max(24).required(),
});
