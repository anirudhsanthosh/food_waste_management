// @ts-nocheck
import Joi from 'joi';
import { BloodGroupUpdateWithoutRequestsInputSchemaObject } from './BloodGroupUpdateWithoutRequestsInput.schema';
import { BloodGroupUncheckedUpdateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutRequestsInput.schema';
import { BloodGroupCreateWithoutRequestsInputSchemaObject } from './BloodGroupCreateWithoutRequestsInput.schema';
import { BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutRequestsInput.schema'

export const BloodGroupUpsertWithoutRequestsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutRequestsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject))
}