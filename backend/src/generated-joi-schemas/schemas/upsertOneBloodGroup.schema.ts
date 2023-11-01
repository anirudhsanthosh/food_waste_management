import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject, BloodGroupCreateInputSchemaObject, BloodGroupUpdateInputSchemaObject } from './objects'

export const BloodGroupUpsertSchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject), data: Joi.object().keys(BloodGroupCreateInputSchemaObject), update: Joi.object().keys(BloodGroupUpdateInputSchemaObject)  }).required()