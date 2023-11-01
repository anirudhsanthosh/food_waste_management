// @ts-nocheck
import Joi from 'joi';
import { DonationCreateNestedManyWithoutBloodInputSchemaObject } from './DonationCreateNestedManyWithoutBloodInput.schema';
import { UserCreateNestedManyWithoutBloodInputSchemaObject } from './UserCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupCreateWithoutRequestsInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  donations: Joi.object().keys(DonationCreateNestedManyWithoutBloodInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedManyWithoutBloodInputSchemaObject)
}