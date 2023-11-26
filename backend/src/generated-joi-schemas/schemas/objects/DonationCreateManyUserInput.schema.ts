// @ts-nocheck
import Joi from 'joi';


export const DonationCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  bloodGroup: Joi.string().required()
}