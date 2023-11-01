// @ts-nocheck
import Joi from 'joi';


export const RequestUncheckedCreateWithoutBloodInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  status: Joi.string(),
  userId: Joi.number().required()
}