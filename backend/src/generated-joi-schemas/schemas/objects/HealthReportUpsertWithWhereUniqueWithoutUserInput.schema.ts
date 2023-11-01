// @ts-nocheck
import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject } from './HealthReportWhereUniqueInput.schema';
import { HealthReportUpdateWithoutUserInputSchemaObject } from './HealthReportUpdateWithoutUserInput.schema';
import { HealthReportUncheckedUpdateWithoutUserInputSchemaObject } from './HealthReportUncheckedUpdateWithoutUserInput.schema';
import { HealthReportCreateWithoutUserInputSchemaObject } from './HealthReportCreateWithoutUserInput.schema';
import { HealthReportUncheckedCreateWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateWithoutUserInput.schema'

export const HealthReportUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(HealthReportUpdateWithoutUserInputSchemaObject),
Joi.object().keys(HealthReportUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject),
Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject))
}