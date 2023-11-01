import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject } from './objects'

export const HealthReportFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject) }).required()