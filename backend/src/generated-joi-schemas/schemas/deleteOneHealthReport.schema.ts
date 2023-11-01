import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject } from './objects'

export const HealthReportDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject)  }).required()