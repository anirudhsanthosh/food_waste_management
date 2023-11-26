import Joi from 'joi';
import { BloodGroupWhereInputSchemaObject, BloodGroupOrderByWithAggregationInputSchemaObject, BloodGroupScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { BloodGroupScalarFieldEnumSchema } from './enums'

export const BloodGroupGroupBySchema = Joi.object().keys({ where: Joi.object().keys(BloodGroupWhereInputSchemaObject), orderBy: Joi.object().keys(BloodGroupOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(BloodGroupScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(BloodGroupScalarFieldEnumSchema).required()  }).required()