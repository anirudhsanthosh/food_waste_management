// @ts-nocheck
import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupCreateWithoutUserInputSchemaObject } from './BloodGroupCreateWithoutUserInput.schema';
import { BloodGroupUncheckedCreateWithoutUserInputSchemaObject } from './BloodGroupUncheckedCreateWithoutUserInput.schema'

export const BloodGroupCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutUserInputSchemaObject))
}