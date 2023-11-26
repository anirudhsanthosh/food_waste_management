import Joi from 'joi';
import { BloodGroupUpdateInputSchemaObject, BloodGroupWhereUniqueInputSchemaObject } from './objects'

export const BloodGroupUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(BloodGroupUpdateInputSchemaObject), where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject)  }).required()