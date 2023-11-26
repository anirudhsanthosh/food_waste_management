// @ts-nocheck
import Joi from 'joi';
import { BloodGroupUpdateWithoutUserInputSchemaObject } from './BloodGroupUpdateWithoutUserInput.schema';
import { BloodGroupUncheckedUpdateWithoutUserInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutUserInput.schema';
import { BloodGroupCreateWithoutUserInputSchemaObject } from './BloodGroupCreateWithoutUserInput.schema';
import { BloodGroupUncheckedCreateWithoutUserInputSchemaObject } from './BloodGroupUncheckedCreateWithoutUserInput.schema'

export const BloodGroupUpsertWithoutUserInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutUserInputSchemaObject))
}