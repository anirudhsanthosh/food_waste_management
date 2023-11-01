// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutDonationsInputSchemaObject } from './BloodGroupCreateWithoutDonationsInput.schema';
import { BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutDonationsInput.schema';
import { BloodGroupCreateOrConnectWithoutDonationsInputSchemaObject } from './BloodGroupCreateOrConnectWithoutDonationsInput.schema';
import { BloodGroupUpsertWithoutDonationsInputSchemaObject } from './BloodGroupUpsertWithoutDonationsInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupUpdateWithoutDonationsInputSchemaObject } from './BloodGroupUpdateWithoutDonationsInput.schema';
import { BloodGroupUncheckedUpdateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutDonationsInput.schema'

export const BloodGroupUpdateOneRequiredWithoutDonationsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutDonationsInputSchemaObject),
  upsert: Joi.object().keys(BloodGroupUpsertWithoutDonationsInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutDonationsInputSchemaObject))
}