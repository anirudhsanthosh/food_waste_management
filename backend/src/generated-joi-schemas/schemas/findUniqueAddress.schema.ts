import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject } from './objects'

export const AddressFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereUniqueInputSchemaObject) }).required()