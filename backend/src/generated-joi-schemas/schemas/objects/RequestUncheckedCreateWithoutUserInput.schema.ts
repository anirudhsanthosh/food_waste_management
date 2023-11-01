// @ts-nocheck
import Joi from 'joi';


export const RequestUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  status: Joi.string(),
  bloodGroup: Joi.string().required()
}