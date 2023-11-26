import Joi from 'joi';
import { RequestWhereInputSchemaObject } from './objects'

export const RequestDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RequestWhereInputSchemaObject)  }).required()