// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateNestedOneWithoutRequestsInputSchemaObject } from './BloodGroupCreateNestedOneWithoutRequestsInput.schema';
import { UserCreateNestedOneWithoutRequestsInputSchemaObject } from './UserCreateNestedOneWithoutRequestsInput.schema'

export const RequestCreateInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  status: Joi.string(),
  blood: Joi.object().keys(BloodGroupCreateNestedOneWithoutRequestsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutRequestsInputSchemaObject)
}