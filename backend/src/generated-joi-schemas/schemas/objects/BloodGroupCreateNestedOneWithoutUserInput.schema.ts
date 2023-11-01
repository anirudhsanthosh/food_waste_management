// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutUserInputSchemaObject } from './BloodGroupCreateWithoutUserInput.schema';
import { BloodGroupUncheckedCreateWithoutUserInputSchemaObject } from './BloodGroupUncheckedCreateWithoutUserInput.schema';
import { BloodGroupCreateOrConnectWithoutUserInputSchemaObject } from './BloodGroupCreateOrConnectWithoutUserInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema'

export const BloodGroupCreateNestedOneWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutUserInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutUserInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject)
}