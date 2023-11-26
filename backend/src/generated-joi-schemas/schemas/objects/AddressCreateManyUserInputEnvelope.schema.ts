// @ts-nocheck
import Joi from 'joi';
import { AddressCreateManyUserInputSchemaObject } from './AddressCreateManyUserInput.schema'

export const AddressCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(AddressCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}