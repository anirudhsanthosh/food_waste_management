// @ts-nocheck
import Joi from 'joi';
import { RequestCreateNestedManyWithoutBloodInputSchemaObject } from './RequestCreateNestedManyWithoutBloodInput.schema';
import { DonationCreateNestedManyWithoutBloodInputSchemaObject } from './DonationCreateNestedManyWithoutBloodInput.schema';
import { UserCreateNestedManyWithoutBloodInputSchemaObject } from './UserCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupCreateInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  requests: Joi.object().keys(RequestCreateNestedManyWithoutBloodInputSchemaObject),
  donations: Joi.object().keys(DonationCreateNestedManyWithoutBloodInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedManyWithoutBloodInputSchemaObject)
}