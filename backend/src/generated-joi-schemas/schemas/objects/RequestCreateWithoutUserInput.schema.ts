// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateNestedOneWithoutRequestsInputSchemaObject } from './BloodGroupCreateNestedOneWithoutRequestsInput.schema'

export const RequestCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  status: Joi.string(),
  blood: Joi.object().keys(BloodGroupCreateNestedOneWithoutRequestsInputSchemaObject)
}