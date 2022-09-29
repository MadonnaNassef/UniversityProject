import Joi from "joi";
const registerLectureSchema = Joi.object({
    id:Joi.string().required().message({
        'string.id': 'ID must be valid',
		'string.empty': "ID can't be empty",
        'any.required':'Id is required'
    }),
    password:Joi.string().required().min(8).messages({
        "string.min": "Must be at least 8 characters",
        "any.required": "phoneNumber is required",
})
})

export default registerLectureSchema