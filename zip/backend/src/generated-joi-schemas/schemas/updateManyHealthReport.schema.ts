import Joi from 'joi';
import { HealthReportUpdateManyMutationInputSchemaObject, HealthReportWhereInputSchemaObject } from './objects'

export const HealthReportUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(HealthReportUpdateManyMutationInputSchemaObject), where: Joi.object().keys(HealthReportWhereInputSchemaObject)  }).required()