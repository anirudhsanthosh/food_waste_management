import Joi from "joi";

export const updateFoodRequestSchema = Joi.object({
    status: Joi.string().required().valid('completed','pending','failed','rejected','cancelled'),
})
