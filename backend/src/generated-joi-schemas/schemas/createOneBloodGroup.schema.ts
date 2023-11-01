import Joi from 'joi';
import { BloodGroupCreateInputSchemaObject } from './objects'

export const BloodGroupCreateSchema = Joi.object().keys({ data: Joi.object().keys(BloodGroupCreateInputSchemaObject)  }).required()