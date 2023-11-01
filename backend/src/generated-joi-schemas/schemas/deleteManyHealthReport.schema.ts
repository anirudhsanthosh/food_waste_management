import Joi from 'joi';
import { HealthReportWhereInputSchemaObject } from './objects'

export const HealthReportDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereInputSchemaObject)  }).required()