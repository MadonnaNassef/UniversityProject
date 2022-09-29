import Joi from 'joi';
const loginSchema = Joi.object({
	id: Joi.string().required().messages({
		'string.id': 'ID must be valid',
		'string.empty': "ID can't be empty",
		'any.required': 'ID is required',
	}),
	password: Joi.string().required().messages({
		'string.empty': "Password can't be empty",
		'any.required': 'Password is required',
	}),
});

export default loginSchema;