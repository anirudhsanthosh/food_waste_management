import Joi from "joi";

export const attachmentItemsSchema = Joi.object({
    file: Joi.string().required(),
    title: Joi.string().min(4).required(),
})


export const createLoanSchema = Joi.object({
    // title: Joi.string().min(1).required(),
    // description: Joi.string().min(5).required(),
    amount: Joi.number().min(100).required(),
    duration: Joi.number().min(3).required(),
    interestRate: Joi.number().min(1).required(),
    installments: Joi.number().min(1).required(),
    attachments: Joi.array().items(attachmentItemsSchema).min(1).required(),
})


export const createBankSchema = Joi.object({
    name: Joi.string().min(1).required(),
})


