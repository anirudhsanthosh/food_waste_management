// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutAddressInputSchemaObject } from './UserCreateNestedOneWithoutAddressInput.schema'

export const AddressCreateInputSchemaObject = {
    id: Joi.string(),
  houseName: Joi.alternatives().try(Joi.string()),
  landmark: Joi.alternatives().try(Joi.string()),
  town: Joi.alternatives().try(Joi.string()),
  city: Joi.alternatives().try(Joi.string()),
  pin: Joi.alternatives().try(Joi.number()),
  user: Joi.object().keys(UserCreateNestedOneWithoutAddressInputSchemaObject)
}