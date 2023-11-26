import Joi from 'joi';
import { BloodGroupWhereInputSchemaObject } from './objects'

export const BloodGroupDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereInputSchemaObject)  }).required()