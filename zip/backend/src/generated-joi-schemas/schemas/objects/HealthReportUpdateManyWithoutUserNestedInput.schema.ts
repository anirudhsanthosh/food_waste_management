// @ts-nocheck
import Joi from 'joi';
import { HealthReportCreateWithoutUserInputSchemaObject } from './HealthReportCreateWithoutUserInput.schema';
import { HealthReportUncheckedCreateWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateWithoutUserInput.schema';
import { HealthReportCreateOrConnectWithoutUserInputSchemaObject } from './HealthReportCreateOrConnectWithoutUserInput.schema';
import { HealthReportUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './HealthReportUpsertWithWhereUniqueWithoutUserInput.schema';
import { HealthReportWhereUniqueInputSchemaObject } from './HealthReportWhereUniqueInput.schema';
import { HealthReportUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './HealthReportUpdateWithWhereUniqueWithoutUserInput.schema';
import { HealthReportUpdateManyWithWhereWithoutUserInputSchemaObject } from './HealthReportUpdateManyWithWhereWithoutUserInput.schema';
import { HealthReportScalarWhereInputSchemaObject } from './HealthReportScalarWhereInput.schema'

export const HealthReportUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportCreateWithoutUserInputSchemaObject)),
Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(HealthReportCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(HealthReportUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(HealthReportUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(HealthReportUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(HealthReportScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(HealthReportScalarWhereInputSchemaObject)))
}