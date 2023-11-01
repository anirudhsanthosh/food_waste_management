// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutRequestsInputSchemaObject } from './UserCreateNestedOneWithoutRequestsInput.schema'

export const RequestCreateWithoutBloodInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  status: Joi.string(),
  user: Joi.object().keys(UserCreateNestedOneWithoutRequestsInputSchemaObject)
}