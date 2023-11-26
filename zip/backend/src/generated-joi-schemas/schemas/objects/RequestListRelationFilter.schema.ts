// @ts-nocheck
import Joi from 'joi';
import { RequestWhereInputSchemaObject } from './RequestWhereInput.schema'

export const RequestListRelationFilterSchemaObject = {
    every: Joi.object().keys(RequestWhereInputSchemaObject),
  some: Joi.object().keys(RequestWhereInputSchemaObject),
  none: Joi.object().keys(RequestWhereInputSchemaObject)
}