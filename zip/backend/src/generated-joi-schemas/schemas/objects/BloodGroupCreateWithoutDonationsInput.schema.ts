// @ts-nocheck
import Joi from 'joi';
import { RequestCreateNestedManyWithoutBloodInputSchemaObject } from './RequestCreateNestedManyWithoutBloodInput.schema';
import { UserCreateNestedManyWithoutBloodInputSchemaObject } from './UserCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupCreateWithoutDonationsInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  requests: Joi.object().keys(RequestCreateNestedManyWithoutBloodInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedManyWithoutBloodInputSchemaObject)
}