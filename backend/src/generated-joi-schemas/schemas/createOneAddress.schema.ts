import Joi from 'joi';
import { AddressCreateInputSchemaObject } from './objects'

export const AddressCreateSchema = Joi.object().keys({ data: Joi.object().keys(AddressCreateInputSchemaObject)  }).required()