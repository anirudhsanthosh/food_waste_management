import Joi from 'joi';
import { HealthReportCreateInputSchemaObject } from './objects'

export const HealthReportCreateSchema = Joi.object().keys({ data: Joi.object().keys(HealthReportCreateInputSchemaObject)  }).required()