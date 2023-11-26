import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject } from './objects'

export const BloodGroupDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject)  }).required()