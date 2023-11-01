// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutHealthReportsInputSchemaObject } from './UserCreateNestedOneWithoutHealthReportsInput.schema'

export const HealthReportCreateInputSchemaObject = {
    id: Joi.string(),
  bp: Joi.alternatives().try(Joi.string()),
  cholesterol: Joi.alternatives().try(Joi.string()),
  weight: Joi.alternatives().try(Joi.number()),
  height: Joi.alternatives().try(Joi.number()),
  date: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutHealthReportsInputSchemaObject)
}