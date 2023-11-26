// @ts-nocheck
import Joi from 'joi';


export const DonationUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  bloodGroup: Joi.string().required(),
  userId: Joi.number().required()
}