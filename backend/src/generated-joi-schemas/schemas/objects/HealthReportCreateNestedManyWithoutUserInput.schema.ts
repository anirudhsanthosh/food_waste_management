// @ts-nocheck
import Joi from 'joi';
import { HealthReportCreateWithoutUserInputSchemaObject } from './HealthReportCreateWithoutUserInput.schema';
import { HealthReportUncheckedCreateWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateWithoutUserInput.schema';
import { HealthReportCreateOrConnectWithoutUserInputSchemaObject } from './HealthReportCreateOrConnectWithoutUserInput.schema';
import { HealthReportCreateManyUserInputEnvelopeSchemaObject } from './HealthReportCreateManyUserInputEnvelope.schema';
import { HealthReportWhereUniqueInputSchemaObject } from './HealthReportWhereUniqueInput.schema'

export const HealthReportCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject)),
Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(HealthReportCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(HealthReportCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject)))
}