import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './objects'

export const RequestDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(RequestWhereUniqueInputSchemaObject)  }).required()