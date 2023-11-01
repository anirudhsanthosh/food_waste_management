import Joi from 'joi';
import { AddressUpdateManyMutationInputSchemaObject, AddressWhereInputSchemaObject } from './objects'

export const AddressUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(AddressUpdateManyMutationInputSchemaObject), where: Joi.object().keys(AddressWhereInputSchemaObject)  }).required()