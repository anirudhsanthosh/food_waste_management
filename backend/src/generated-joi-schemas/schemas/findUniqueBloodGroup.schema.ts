import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject } from './objects'

export const BloodGroupFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject) }).required()