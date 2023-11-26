// @ts-nocheck
import Joi from 'joi';


export const DonationCreateManyBloodInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  userId: Joi.number().required()
}