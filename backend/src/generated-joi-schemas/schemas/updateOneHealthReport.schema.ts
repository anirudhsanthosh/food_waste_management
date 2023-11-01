import Joi from 'joi';
import { HealthReportUpdateInputSchemaObject, HealthReportWhereUniqueInputSchemaObject } from './objects'

export const HealthReportUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(HealthReportUpdateInputSchemaObject), where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject)  }).required()