import Joi from 'joi';
import { AddressWhereInputSchemaObject } from './objects'

export const AddressDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereInputSchemaObject)  }).required()