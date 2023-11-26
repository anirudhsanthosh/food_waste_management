// @ts-nocheck
import Joi from 'joi';
import { HealthReportScalarWhereInputSchemaObject } from './HealthReportScalarWhereInput.schema';
import { HealthReportUpdateManyMutationInputSchemaObject } from './HealthReportUpdateManyMutationInput.schema';
import { HealthReportUncheckedUpdateManyWithoutHealthReportsInputSchemaObject } from './HealthReportUncheckedUpdateManyWithoutHealthReportsInput.schema'

export const HealthReportUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(HealthReportScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(HealthReportUpdateManyMutationInputSchemaObject),
Joi.object().keys(HealthReportUncheckedUpdateManyWithoutHealthReportsInputSchemaObject))
}