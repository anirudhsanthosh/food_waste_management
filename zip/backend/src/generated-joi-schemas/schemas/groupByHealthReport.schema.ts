import Joi from 'joi';
import { HealthReportWhereInputSchemaObject, HealthReportOrderByWithAggregationInputSchemaObject, HealthReportScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { HealthReportScalarFieldEnumSchema } from './enums'

export const HealthReportGroupBySchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereInputSchemaObject), orderBy: Joi.object().keys(HealthReportOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(HealthReportScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(HealthReportScalarFieldEnumSchema).required()  }).required()