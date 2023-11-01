import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject, AddressCreateInputSchemaObject, AddressUpdateInputSchemaObject } from './objects'

export const AddressUpsertSchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereUniqueInputSchemaObject), data: Joi.object().keys(AddressCreateInputSchemaObject), update: Joi.object().keys(AddressUpdateInputSchemaObject)  }).required()