// @ts-nocheck
import Joi from 'joi';
import { HealthReportWhereInputSchemaObject } from './HealthReportWhereInput.schema'

export const HealthReportListRelationFilterSchemaObject = {
    every: Joi.object().keys(HealthReportWhereInputSchemaObject),
  some: Joi.object().keys(HealthReportWhereInputSchemaObject),
  none: Joi.object().keys(HealthReportWhereInputSchemaObject)
}