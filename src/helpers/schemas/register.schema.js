import Joi from "joi";
const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "string.empty": "Email can't be empty",
    "any.required": "Email is required",
  }),
  name: Joi.string().min(8).max(32).required().messages({
    "string.min": "Name must be at least 8 characters",
    "string.max": "Name can't be longer than 32 characters",
    "string.empty": "Name can't be empty",
    "any.required": "Name is required",
  }),
  phoneNumber: Joi.string().required().min(11).messages({
    "string.min": "phone number must be 11 characters",
    "string.empty": "Name can't be empty",
    "any.required": "phone number is required",
  }),
  password: Joi.string().required().min(8).messages({
    "string.min": "Must be at least 8 characters",
    "string.empty": "Name can't be empty",
    "any.required": "password is required",
  }),
  role: Joi.string().required().messages({
    "string.empty": "Name can't be empty",
    "any.required": "role is required",
  }),
});

export default registerSchema;
