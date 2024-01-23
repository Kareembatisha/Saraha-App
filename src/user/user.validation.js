import Joi from "joi";

export const signUpSchema = Joi.object({
  userName: Joi.string().min(3).max(15).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  age: Joi.number().min(16).max(90).required(),
  password: Joi.string()
    .pattern(/^[A_Z][a-z0-9]{8,20}$/)
    .required(),
});

export const signInSchema = Joi.object({
  body: {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string()
      .pattern(/^[A_Z][a-z0-9]{8,20}$/)
      .required(),
  },
});

export const validParam = Joi.object({
  id: Joi.string().hex().min(24).max(24).required(),
});
