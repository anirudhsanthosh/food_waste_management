// @ts-nocheck
import Joi from 'joi';
import { UserCreateManyBloodInputSchemaObject } from './UserCreateManyBloodInput.schema'

export const UserCreateManyBloodInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(UserCreateManyBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserCreateManyBloodInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}