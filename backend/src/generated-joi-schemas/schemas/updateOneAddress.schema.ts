import Joi from 'joi';
import { AddressUpdateInputSchemaObject, AddressWhereUniqueInputSchemaObject } from './objects'

export const AddressUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(AddressUpdateInputSchemaObject), where: Joi.object().keys(AddressWhereUniqueInputSchemaObject)  }).required()