import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject } from './objects'

export const AddressDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereUniqueInputSchemaObject)  }).required()