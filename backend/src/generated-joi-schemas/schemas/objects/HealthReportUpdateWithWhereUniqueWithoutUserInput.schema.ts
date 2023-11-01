// @ts-nocheck
import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject } from './HealthReportWhereUniqueInput.schema';
import { HealthReportUpdateWithoutUserInputSchemaObject } from './HealthReportUpdateWithoutUserInput.schema';
import { HealthReportUncheckedUpdateWithoutUserInputSchemaObject } from './HealthReportUncheckedUpdateWithoutUserInput.schema'

export const HealthReportUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(HealthReportUpdateWithoutUserInputSchemaObject),
Joi.object().keys(HealthReportUncheckedUpdateWithoutUserInputSchemaObject))
}