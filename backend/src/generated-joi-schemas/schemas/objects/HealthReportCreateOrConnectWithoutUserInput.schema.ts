// @ts-nocheck
import Joi from 'joi';
import { HealthReportWhereUniqueInputSchemaObject } from './HealthReportWhereUniqueInput.schema';
import { HealthReportCreateWithoutUserInputSchemaObject } from './HealthReportCreateWithoutUserInput.schema';
import { HealthReportUncheckedCreateWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateWithoutUserInput.schema'

export const HealthReportCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject),
Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject))
}