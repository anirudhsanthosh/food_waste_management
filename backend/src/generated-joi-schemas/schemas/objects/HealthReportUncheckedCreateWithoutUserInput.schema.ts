// @ts-nocheck
import Joi from 'joi';


export const HealthReportUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  bp: Joi.alternatives().try(Joi.string()),
  cholesterol: Joi.alternatives().try(Joi.string()),
  weight: Joi.alternatives().try(Joi.number()),
  height: Joi.alternatives().try(Joi.number()),
  date: Joi.date()
}