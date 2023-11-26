// @ts-nocheck
import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupCreateWithoutRequestsInputSchemaObject } from './BloodGroupCreateWithoutRequestsInput.schema';
import { BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutRequestsInput.schema'

export const BloodGroupCreateOrConnectWithoutRequestsInputSchemaObject = {
    where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject))
}