// @ts-nocheck
import Joi from 'joi';


export const AddressCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  houseName: Joi.alternatives().try(Joi.string()),
  landmark: Joi.alternatives().try(Joi.string()),
  town: Joi.alternatives().try(Joi.string()),
  city: Joi.alternatives().try(Joi.string()),
  pin: Joi.alternatives().try(Joi.number())
}