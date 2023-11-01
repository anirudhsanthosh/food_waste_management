// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutRequestsInputSchemaObject } from './BloodGroupCreateWithoutRequestsInput.schema';
import { BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutRequestsInput.schema';
import { BloodGroupCreateOrConnectWithoutRequestsInputSchemaObject } from './BloodGroupCreateOrConnectWithoutRequestsInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema'

export const BloodGroupCreateNestedOneWithoutRequestsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutRequestsInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject)
}