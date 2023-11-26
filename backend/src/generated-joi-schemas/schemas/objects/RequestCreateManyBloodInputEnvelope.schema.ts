// @ts-nocheck
import Joi from 'joi';
import { RequestCreateManyBloodInputSchemaObject } from './RequestCreateManyBloodInput.schema'

export const RequestCreateManyBloodInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(RequestCreateManyBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateManyBloodInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}