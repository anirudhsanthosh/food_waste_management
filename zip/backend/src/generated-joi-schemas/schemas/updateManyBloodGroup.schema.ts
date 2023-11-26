import Joi from 'joi';
import { BloodGroupUpdateManyMutationInputSchemaObject, BloodGroupWhereInputSchemaObject } from './objects'

export const BloodGroupUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(BloodGroupUpdateManyMutationInputSchemaObject), where: Joi.object().keys(BloodGroupWhereInputSchemaObject)  }).required()