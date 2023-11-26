// @ts-nocheck
import Joi from 'joi';
import { RequestCreateManyUserInputSchemaObject } from './RequestCreateManyUserInput.schema'

export const RequestCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(RequestCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}