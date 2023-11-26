// @ts-nocheck
import Joi from 'joi';
import { HealthReportCreateManyUserInputSchemaObject } from './HealthReportCreateManyUserInput.schema'

export const HealthReportCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(HealthReportCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}