// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutUserInputSchemaObject } from './BloodGroupCreateWithoutUserInput.schema';
import { BloodGroupUncheckedCreateWithoutUserInputSchemaObject } from './BloodGroupUncheckedCreateWithoutUserInput.schema';
import { BloodGroupCreateOrConnectWithoutUserInputSchemaObject } from './BloodGroupCreateOrConnectWithoutUserInput.schema';
import { BloodGroupUpsertWithoutUserInputSchemaObject } from './BloodGroupUpsertWithoutUserInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupUpdateWithoutUserInputSchemaObject } from './BloodGroupUpdateWithoutUserInput.schema';
import { BloodGroupUncheckedUpdateWithoutUserInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutUserInput.schema'

export const BloodGroupUpdateOneRequiredWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutUserInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutUserInputSchemaObject),
  upsert: Joi.object().keys(BloodGroupUpsertWithoutUserInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutUserInputSchemaObject))
}