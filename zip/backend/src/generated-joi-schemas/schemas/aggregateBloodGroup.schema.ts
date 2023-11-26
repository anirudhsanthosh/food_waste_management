import Joi from 'joi';
import { BloodGroupWhereInputSchemaObject, BloodGroupOrderByWithRelationInputSchemaObject, BloodGroupWhereUniqueInputSchemaObject } from './objects'

export const BloodGroupAggregateSchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereInputSchemaObject), orderBy: Joi.object().keys(BloodGroupOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()