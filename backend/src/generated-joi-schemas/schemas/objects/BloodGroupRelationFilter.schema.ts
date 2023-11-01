// @ts-nocheck
import Joi from 'joi';
import { BloodGroupWhereInputSchemaObject } from './BloodGroupWhereInput.schema'

export const BloodGroupRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(BloodGroupWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(BloodGroupWhereInputSchemaObject))
}