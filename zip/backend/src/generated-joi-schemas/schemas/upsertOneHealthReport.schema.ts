import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject, HealthReportCreateInputSchemaObject, HealthReportUpdateInputSchemaObject } from './objects'

export const HealthReportUpsertSchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject), data: Joi.object().keys(HealthReportCreateInputSchemaObject), update: Joi.object().keys(HealthReportUpdateInputSchemaObject)  }).required()