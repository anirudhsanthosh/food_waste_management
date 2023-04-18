import Joi from "joi";

export const createFoodRequestSchema = Joi.object({
    address: Joi.string().min(15).max(200).required(),
    phone: Joi.string().min(10).max(15).required(),
    place: Joi.string().min(3).max(200).required(),
    date: Joi.date().required(),
    quantity: Joi.number().min(1).max(500).required(),
})
