import Joi from "joi";

// Register Validation
export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("student", "instructor").required()
});

// Login Validation
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});


