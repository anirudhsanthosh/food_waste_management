// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutRequestsInputSchemaObject } from './BloodGroupCreateWithoutRequestsInput.schema';
import { BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutRequestsInput.schema';
import { BloodGroupCreateOrConnectWithoutRequestsInputSchemaObject } from './BloodGroupCreateOrConnectWithoutRequestsInput.schema';
import { BloodGroupUpsertWithoutRequestsInputSchemaObject } from './BloodGroupUpsertWithoutRequestsInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupUpdateWithoutRequestsInputSchemaObject } from './BloodGroupUpdateWithoutRequestsInput.schema';
import { BloodGroupUncheckedUpdateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutRequestsInput.schema'

export const BloodGroupUpdateOneRequiredWithoutRequestsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutRequestsInputSchemaObject),
  upsert: Joi.object().keys(BloodGroupUpsertWithoutRequestsInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutRequestsInputSchemaObject))
}